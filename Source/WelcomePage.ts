// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.

import * as fs from "fs";
import {
	ExtensionContext,
	Uri,
	ViewColumn,
	WebviewPanel,
	window,
} from "vscode";

import { Constants } from "./Constants";
import { required } from "./helpers";

export class WelcomePage {
	private panel?: WebviewPanel;

	private context: ExtensionContext;

	constructor(context: ExtensionContext) {
		this.context = context;
	}

	public async checkAndShow(): Promise<void> {
		if (!this.context.globalState.get(Constants.isWelcomePageShown)) {
			this.context.globalState.update(Constants.isWelcomePageShown, true);

			return this.show();
		}
	}

	public async show(): Promise<void> {
		if (!this.panel) {
			this.panel = window.createWebviewPanel(
				"welcomePage",
				"Welcome to Azure Blockchain",
				ViewColumn.One,
				{
					enableCommandUris: true,
					enableScripts: true,
					retainContextWhenHidden: true,
				},
			);

			const rootPath = Uri.file(this.context.asAbsolutePath("."))
				.with({ scheme: "vscode-resource" })
				.toString();

			this.panel.webview.html = fs
				.readFileSync(Constants.welcomePagePath, "utf8")
				.replace(/{{root}}/g, rootPath);

			this.panel.onDidDispose(() => {
				this.dispose();
			});
		} else {
			this.panel.reveal(ViewColumn.One);
		}

		this.context.subscriptions.push(
			this.panel.webview.onDidReceiveMessage(
				async (message) => {
					switch (message.command) {
						case "documentready":
							if (this.panel) {
								this.panel.webview.postMessage({
									versions: await required.getAllVersions(),
								});
							}

							return;
					}
				},
				undefined,
				this.context.subscriptions,
			),
		);
	}

	private dispose(): void {
		if (this.panel) {
			this.panel.dispose();
		}

		this.panel = undefined;
	}
}

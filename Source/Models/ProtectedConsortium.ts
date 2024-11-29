// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.

import * as fs from "fs";

import { Constants } from "../Constants";
import {
	saveTextInFile,
	showInputBox,
	showQuickPick,
	TruffleConfiguration,
} from "../helpers";
import { MnemonicRepository } from "../MnemonicService/MnemonicRepository";
import { Consortium } from "./Consortium";
import { ItemType } from "./ItemType";

export abstract class ProtectedConsortium extends Consortium {
	protected constructor(
		itemType: ItemType,
		consortiumName: string,
		description?: string,
	) {
		super(itemType, consortiumName, description);
	}

	public async getTruffleNetwork(): Promise<TruffleConfiguration.INetwork> {
		const truffleConfigPath = (
			await TruffleConfiguration.getTruffleConfigUri()
		)[0].fsPath;

		const config = new TruffleConfiguration.TruffleConfig(
			truffleConfigPath,
		);

		const network = await super.getTruffleNetwork();

		const targetURL = await this.getRPCAddress();

		const accessKey = await this.getAccessKey();

		const mnemonic = await this.getMnemonic();

		await config.importFs();

		network.options.provider = {
			mnemonic: mnemonic.path,
			url: `${targetURL}/${accessKey}`,
		};

		return network;
	}

	private async getMnemonic(): Promise<{ mnemonic: string; path: string }> {
		const mnemonicOptions = [
			{
				cmd: async () => {
					const mnemonic =
						await TruffleConfiguration.generateMnemonic();

					const path = await this.saveMnemonicFile(mnemonic);

					return { mnemonic, path };
				},
				label: Constants.placeholders.generateMnemonic,
			},
			{
				cmd: async () => {
					const mnemonic = await showInputBox({
						ignoreFocusOut: true,
						placeHolder: Constants.placeholders.pasteMnemonic,
					});

					const path = await this.saveMnemonicFile(mnemonic);

					return { mnemonic, path };
				},
				label: Constants.placeholders.pasteMnemonic,
			},
		];

		const savedMnemonics = MnemonicRepository.getAllMnemonicPaths()
			.filter((path) => fs.existsSync(path))
			.map((path) => {
				const mnemonic = MnemonicRepository.getMnemonic(path);

				const label = `${mnemonic.split(" ")[0].slice(0, 3)} ... ${mnemonic.split(" ")[11].slice(-3)}`;

				return {
					cmd: async () => ({ mnemonic, path }),
					detail: path,
					label,
				};
			});

		mnemonicOptions.push(...savedMnemonics);

		return await (
			await showQuickPick(mnemonicOptions, {
				placeHolder: Constants.placeholders.setupMnemonic,
				ignoreFocusOut: true,
			})
		).cmd();
	}

	private async saveMnemonicFile(mnemonic: string): Promise<string> {
		const path = await saveTextInFile(mnemonic, "", {
			Files: [Constants.mnemonicConstants.fileExt],
		});

		MnemonicRepository.saveMnemonicPath(path);

		return path;
	}
}

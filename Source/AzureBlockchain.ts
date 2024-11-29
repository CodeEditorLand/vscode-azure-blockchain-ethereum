// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.

import { env, window } from "vscode";

import { Constants } from "./Constants";
import { ConsortiumView } from "./ViewItems";

export namespace AzureBlockchain {
	export async function copyRPCEndpointAddress(
		consortiumNode: ConsortiumView,
	): Promise<void> {
		const rpcEndpointAddress = await consortiumNode.getRPCAddress();

		await AzureBlockchain.addDataInClipboard(
			Constants.rpcEndpointAddress,
			rpcEndpointAddress,
		);
	}

	export async function copyAccessKey(
		consortiumNode: ConsortiumView,
	): Promise<void> {
		const accessKey = await consortiumNode.getAccessKey();

		await AzureBlockchain.addDataInClipboard(
			Constants.accessKey,
			accessKey,
		);
	}

	export async function addDataInClipboard(
		typeOfData: string,
		data?: string | null,
	) {
		if (data) {
			await env.clipboard.writeText(data);

			window.showInformationMessage(typeOfData + Constants.dataCopied);
		}
	}

	export async function viewGasEstimates(): Promise<void> {
		window.showInformationMessage(
			'"View Gas Estimates with Remix" command does not implemented yet.',
		);
	}
}

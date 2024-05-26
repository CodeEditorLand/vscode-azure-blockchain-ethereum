// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.

import type { TruffleConfiguration } from "../helpers/truffleConfig";
import type { ItemType } from "./ItemType";

export interface IDeployDestination {
	description?: string;
	detail?: string;
	label: string;
	networkType: ItemType;
	port?: number;
	getTruffleNetwork: () => Promise<TruffleConfiguration.INetwork>;
	networkId: number;
}

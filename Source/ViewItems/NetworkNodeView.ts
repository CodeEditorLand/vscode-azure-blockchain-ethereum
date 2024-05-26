// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.

import type { NetworkNode } from "../Models/TreeItems";
import { ExtensionView } from "./ExtensionView";

export class NetworkNodeView extends ExtensionView<NetworkNode> {
	constructor(networkNode: NetworkNode) {
		super(networkNode);
	}
}

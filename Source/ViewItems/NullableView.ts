// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.

import type { Nullable } from "../Models/TreeItems/Nullable";
import { ExtensionView } from "./ExtensionView";

export class NullableView extends ExtensionView<Nullable> {
	constructor(nullableItem: Nullable) {
		super(nullableItem);
	}
}

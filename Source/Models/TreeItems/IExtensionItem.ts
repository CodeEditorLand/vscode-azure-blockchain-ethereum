// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.

import type { TreeItem } from "vscode";
import type { ItemType } from "../ItemType";

export interface IExtensionItem extends TreeItem {
	itemType: ItemType;

	getParent(): IExtensionItem | null;
	getChildren(): IExtensionItem[];
	addParent(parent: IExtensionItem): void;
	addChild(child: IExtensionItem): void;
	removeChild(child: IExtensionItem): void;
	setChildren(children: IExtensionItem[]): void;
	toJSON(): { [key: string]: any };
}

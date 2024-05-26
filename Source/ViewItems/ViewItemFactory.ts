// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.

import type { ItemType } from "../Models";
import { type IExtensionItem, Nullable } from "../Models/TreeItems";
import { Telemetry } from "../TelemetryClient";
import type { ExtensionView } from "./ExtensionView";
import type { ViewCreator } from "./ViewCreators";

export namespace ViewItemFactory {
	const registeredTypes: { [key: number]: ViewCreator } = {};

	export function register(
		type: ItemType | number,
		value: ViewCreator,
	): void {
		if (registeredTypes[type]) {
			const error = new Error(
				`Factory already has this item type: ${type}`,
			);
			Telemetry.sendException(error);
			throw error;
		}

		registeredTypes[type] = value;
	}

	export function create(
		extensionItem: IExtensionItem,
	): ExtensionView<IExtensionItem> {
		const creator = registeredTypes[extensionItem.itemType];
		if (!creator) {
			Telemetry.sendException(
				new Error(
					`Type ${extensionItem.itemType} doesn't exist in factory`,
				),
			);
			extensionItem = new Nullable();
		}

		return creator.create(extensionItem);
	}
}

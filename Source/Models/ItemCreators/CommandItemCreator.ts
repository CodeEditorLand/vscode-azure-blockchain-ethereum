// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.

import { Command } from "../Command";
import { ItemCreator } from "./ItemCreator";

export class CommandItemCreator extends ItemCreator {
	protected createFromObject(obj: { [key: string]: any }): Command {
		const { label, commandName, args } = obj;

		return new Command(label, commandName, args);
	}

	protected getRequiredFields(): Array<{ fieldName: string; type: string }> {
		const requiredFields = super.getRequiredFields();

		return requiredFields.concat({ fieldName: "command", type: "string" });
	}
}

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.

import { Constants } from "../../Constants";
import type { IRule } from "../validator";

export class IsNotEmpty implements IRule {
	public validate(name: string): string | null {
		return !!name.trim()
			? null
			: Constants.validationMessages.valueCannotBeEmpty;
	}
}

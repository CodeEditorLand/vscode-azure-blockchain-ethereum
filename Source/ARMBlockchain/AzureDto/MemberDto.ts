// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.

import type { IAzureConsortiumDto } from "./ConsortiumDto";

export interface IAzureMemberDto {
	location: string;
	name: string;
	properties: IAzureConsortiumDto;
	type: string;
	id: string;
	tags: {};
}

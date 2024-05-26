// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.

import type { IInfuraProjectDto } from "./IInfuraProjectDto";

export interface IProjectsResultDto {
	allowed_projects: number;
	projects: IInfuraProjectDto[];
}

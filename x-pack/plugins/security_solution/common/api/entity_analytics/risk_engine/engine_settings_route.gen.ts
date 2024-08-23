/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

/*
 * NOTICE: Do not edit this file manually.
 * This file is automatically generated by the OpenAPI Generator, @kbn/openapi-generator.
 *
 * info:
 *   title: Risk Scoring API
 *   version: 1
 */

import { z } from '@kbn/zod';

import { DateRange } from '../common/common.gen';

export type ReadRiskEngineSettingsResponse = z.infer<typeof ReadRiskEngineSettingsResponse>;
export const ReadRiskEngineSettingsResponse = z.object({
  range: DateRange.optional(),
});

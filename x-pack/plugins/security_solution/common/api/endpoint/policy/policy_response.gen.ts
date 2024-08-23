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
 *   title: Endpoint Policy Schema
 *   version: 2023-10-31
 */

import { z } from '@kbn/zod';

import { AgentId, SuccessResponse } from '../model/schema/common.gen';

export type GetPolicyResponseRequestQuery = z.infer<typeof GetPolicyResponseRequestQuery>;
export const GetPolicyResponseRequestQuery = z.object({
  query: z.object({
    agentId: AgentId.optional(),
  }),
});
export type GetPolicyResponseRequestQueryInput = z.input<typeof GetPolicyResponseRequestQuery>;

export type GetPolicyResponseResponse = z.infer<typeof GetPolicyResponseResponse>;
export const GetPolicyResponseResponse = SuccessResponse;

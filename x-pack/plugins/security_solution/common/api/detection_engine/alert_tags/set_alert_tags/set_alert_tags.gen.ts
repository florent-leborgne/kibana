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
 *   title: Set alert tags API endpoint
 *   version: 2023-10-31
 */

import { z } from '@kbn/zod';

import { AlertIds, AlertTags } from '../../../model/alert.gen';

export type SetAlertTags = z.infer<typeof SetAlertTags>;
export const SetAlertTags = z.object({
  tags_to_add: AlertTags,
  tags_to_remove: AlertTags,
});

export type SetAlertTagsRequestBody = z.infer<typeof SetAlertTagsRequestBody>;
export const SetAlertTagsRequestBody = z.object({
  ids: AlertIds,
  tags: SetAlertTags,
});
export type SetAlertTagsRequestBodyInput = z.input<typeof SetAlertTagsRequestBody>;

/**
 * Elasticsearch update by query response
 */
export type SetAlertTagsResponse = z.infer<typeof SetAlertTagsResponse>;
export const SetAlertTagsResponse = z.object({}).catchall(z.unknown());

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

/*
 * NOTICE: Do not edit this file manually.
 * This file is automatically generated by the OpenAPI Generator, @kbn/openapi-generator.
 *
 * info:
 *   title: Patch list item API endpoint
 *   version: 2023-10-31
 */

import { z } from '@kbn/zod';

import { ListItemId, ListItemValue, ListItemMetadata } from '../model/list_common.gen';
import { ListItem } from '../model/list_schemas.gen';

export type PatchListItemRequestBody = z.infer<typeof PatchListItemRequestBody>;
export const PatchListItemRequestBody = z.object({
  id: ListItemId,
  value: ListItemValue.optional(),
  meta: ListItemMetadata.optional(),
  _version: z.string().optional(),
  /**
   * Determines when changes made by the request are made visible to search
   */
  refresh: z.enum(['true', 'false', 'wait_for']).optional(),
});
export type PatchListItemRequestBodyInput = z.input<typeof PatchListItemRequestBody>;

export type PatchListItemResponse = z.infer<typeof PatchListItemResponse>;
export const PatchListItemResponse = ListItem;

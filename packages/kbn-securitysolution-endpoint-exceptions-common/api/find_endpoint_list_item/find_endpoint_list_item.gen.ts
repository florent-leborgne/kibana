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
 *   title: Find endpoint list items API endpoint
 *   version: 2023-10-31
 */

import { z } from 'zod';

import { NonEmptyString } from '@kbn/openapi-common/schemas/primitives.gen';
import { EndpointListItem } from '../model/endpoint_list_common.gen';

export type FindEndpointListItemsFilter = z.infer<typeof FindEndpointListItemsFilter>;
export const FindEndpointListItemsFilter = NonEmptyString;

export type FindEndpointListItemsRequestQuery = z.infer<typeof FindEndpointListItemsRequestQuery>;
export const FindEndpointListItemsRequestQuery = z.object({
  /** 
      * Filters the returned results according to the value of the specified field,
using the `<field name>:<field value>` syntax.
 
      */
  filter: FindEndpointListItemsFilter.optional(),
  /**
   * The page number to return
   */
  page: z.coerce.number().int().min(0).optional(),
  /**
   * The number of exception list items to return per page
   */
  per_page: z.coerce.number().int().min(0).optional(),
  /**
   * Determines which field is used to sort the results
   */
  sort_field: NonEmptyString.optional(),
  /**
   * Determines the sort order, which can be `desc` or `asc`
   */
  sort_order: z.enum(['desc', 'asc']).optional(),
});
export type FindEndpointListItemsRequestQueryInput = z.input<
  typeof FindEndpointListItemsRequestQuery
>;

export type FindEndpointListItemsResponse = z.infer<typeof FindEndpointListItemsResponse>;
export const FindEndpointListItemsResponse = z.object({
  data: z.array(EndpointListItem),
  page: z.number().int().min(0),
  per_page: z.number().int().min(0),
  total: z.number().int().min(0),
  pit: z.string().optional(),
});

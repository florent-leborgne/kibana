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
 *   title: Asset Criticality Delete Record Schema
 *   version: 2023-10-31
 */

import { z } from '@kbn/zod';

import { IdField, AssetCriticalityRecord } from './common.gen';

export type DeleteAssetCriticalityRecordRequestQuery = z.infer<
  typeof DeleteAssetCriticalityRecordRequestQuery
>;
export const DeleteAssetCriticalityRecordRequestQuery = z.object({
  /**
   * The ID value of the asset.
   */
  id_value: z.string(),
  /**
   * The field representing the ID.
   */
  id_field: IdField,
  /**
   * If 'wait_for' the request will wait for the index refresh.
   */
  refresh: z.literal('wait_for').optional(),
});
export type DeleteAssetCriticalityRecordRequestQueryInput = z.input<
  typeof DeleteAssetCriticalityRecordRequestQuery
>;

export type DeleteAssetCriticalityRecordResponse = z.infer<
  typeof DeleteAssetCriticalityRecordResponse
>;
export const DeleteAssetCriticalityRecordResponse = z.object({
  /**
   * True if the record was deleted or false if the record did not exist.
   */
  deleted: z.boolean(),
  /**
   * The deleted record if it existed.
   */
  record: AssetCriticalityRecord.optional(),
});

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the "Elastic License
 * 2.0", the "GNU Affero General Public License v3.0 only", and the "Server Side
 * Public License v 1"; you may not use this file except in compliance with, at
 * your election, the "Elastic License 2.0", the "GNU Affero General Public
 * License v3.0 only", or the "Server Side Public License, v 1".
 */

import * as path from 'path';
import { parseTelemetryRC } from './config';

describe('parseTelemetryRC', () => {
  it('throw if config path is not absolute', async () => {
    const fixtureDir = './__fixture__/';
    await expect(parseTelemetryRC(fixtureDir)).rejects.toThrowError();
  });

  it('returns parsed rc file', async () => {
    const configRoot = path.resolve(__dirname, '__fixture__', 'telemetry_collectors');
    const config = await parseTelemetryRC(configRoot);
    expect(config).toStrictEqual([
      {
        root: configRoot,
        output: configRoot,
        exclude: [
          path.resolve(configRoot, './unmapped_collector.ts'),
          path.resolve(configRoot, './externally_defined_usage_collector/index.ts'),
        ],
      },
    ]);
  });
});

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import { render, screen, waitFor } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import React, { ReactNode } from 'react';

import { CoreStart } from 'kibana/public';
import { merge } from 'lodash';
import { EuiThemeProvider } from 'src/plugins/kibana_react/common';
import { createKibanaReactContext } from 'src/plugins/kibana_react/public';
import { MockUrlParamsContextProvider } from '../../../../context/url_params_context/mock_url_params_context_provider';
import { ApmPluginContextValue } from '../../../../context/apm_plugin/apm_plugin_context';
import {
  mockApmPluginContextValue,
  MockApmPluginContextWrapper,
} from '../../../../context/apm_plugin/mock_apm_plugin_context';
import * as useFetcherModule from '../../../../hooks/use_fetcher';
import { fromQuery } from '../../../shared/Links/url_helpers';

import { getFormattedSelection, TransactionDistribution } from './index';

function Wrapper({ children }: { children?: ReactNode }) {
  const KibanaReactContext = createKibanaReactContext({
    usageCollection: { reportUiCounter: () => {} },
  } as Partial<CoreStart>);

  const httpGet = jest.fn();

  const history = createMemoryHistory();
  jest.spyOn(history, 'push');
  jest.spyOn(history, 'replace');

  history.replace({
    pathname: '/services/the-service-name/transactions/view',
    search: fromQuery({ transactionName: 'the-transaction-name' }),
  });

  const mockPluginContext = (merge({}, mockApmPluginContextValue, {
    core: { http: { get: httpGet } },
  }) as unknown) as ApmPluginContextValue;

  return (
    <EuiThemeProvider darkMode={false}>
      <KibanaReactContext.Provider>
        <MockApmPluginContextWrapper
          history={history}
          value={mockPluginContext}
        >
          <MockUrlParamsContextProvider
            params={{
              rangeFrom: 'now-15m',
              rangeTo: 'now',
              start: 'mystart',
              end: 'myend',
            }}
          >
            {children}
          </MockUrlParamsContextProvider>
        </MockApmPluginContextWrapper>
      </KibanaReactContext.Provider>
    </EuiThemeProvider>
  );
}

describe('transaction_details/distribution', () => {
  describe('getFormattedSelection', () => {
    it('displays only one unit if from and to share the same unit', () => {
      expect(getFormattedSelection([10000, 100000])).toEqual('10 - 100 ms');
    });

    it('displays two units when from and to have different units', () => {
      expect(getFormattedSelection([100000, 1000000000])).toEqual(
        '100 ms - 17 min'
      );
    });
  });

  describe('TransactionDistribution', () => {
    it('shows loading indicator when the service is running and returned no results yet', async () => {
      const onHasData = jest.fn();

      jest.spyOn(useFetcherModule, 'useFetcher').mockImplementation(() => ({
        data: {},
        refetch: () => {},
        status: useFetcherModule.FETCH_STATUS.LOADING,
      }));

      render(
        <Wrapper>
          <TransactionDistribution
            onChartSelection={jest.fn()}
            onClearSelection={jest.fn()}
            onHasData={onHasData}
          />
        </Wrapper>
      );

      await waitFor(() => {
        expect(screen.getByTestId('apmCorrelationsChart')).toBeInTheDocument();
        expect(screen.getByTestId('loading')).toBeInTheDocument();
        expect(onHasData).toHaveBeenLastCalledWith(false);
      });
    });

    it("doesn't show loading indicator when the service isn't running", async () => {
      const onHasData = jest.fn();

      jest.spyOn(useFetcherModule, 'useFetcher').mockImplementation(() => ({
        data: { percentileThresholdValue: 1234, overallHistogram: [] },
        refetch: () => {},
        status: useFetcherModule.FETCH_STATUS.SUCCESS,
      }));

      render(
        <Wrapper>
          <TransactionDistribution
            onChartSelection={jest.fn()}
            onClearSelection={jest.fn()}
            onHasData={onHasData}
          />
        </Wrapper>
      );

      await waitFor(() => {
        expect(screen.getByTestId('apmCorrelationsChart')).toBeInTheDocument();
        expect(screen.queryByTestId('loading')).toBeNull(); // it doesn't exist
        expect(onHasData).toHaveBeenLastCalledWith(false);
      });
    });
  });
});

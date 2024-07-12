import type { ReactElement } from 'react';
import { AntProvider, ReactRouterProvider } from './provider';

export const App = (): ReactElement => (
  <AntProvider>
    <ReactRouterProvider />
  </AntProvider>
);

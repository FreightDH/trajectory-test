import type { FC, ReactNode } from 'react';
import { ConfigProvider } from 'antd';

interface AntProviderProps {
  children: ReactNode;
}

export const AntProvider: FC<AntProviderProps> = ({ children }) => (
  <ConfigProvider theme={{ token: { fontSize: 18 } }}>{children}</ConfigProvider>
);

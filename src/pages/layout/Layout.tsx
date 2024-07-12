import type { FC, ReactElement } from 'react';
import { Outlet } from 'react-router-dom';

import { Footer } from '@/widgets/Footer';

export const Layout: FC = (): ReactElement => {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
};

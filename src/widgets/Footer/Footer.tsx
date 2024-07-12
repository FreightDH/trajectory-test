import type { FC, ReactElement } from 'react';
import cl from './Footer.module.scss';

export const Footer: FC = (): ReactElement => {
  return (
    <footer className={cl.footer}>
      <div className="footer__container">
        <div className={cl.footer__body}>
          <a href="https://github.com/FreightDH" target="blank">
            FreightDH
          </a>{' '}
          © 2024 All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

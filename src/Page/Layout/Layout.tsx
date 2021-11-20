import React from 'react';
import { useMediaQuery } from 'react-responsive';

import Router from './Route';
import DesktopLayout from './DesktopLayout';
import MobileLayout from './MobileLayout';

const Mobile: React.FC = ({ children }) => {
  const isMobile = useMediaQuery({
    query: '(max-width:767px)',
  });
  return <React.Fragment>{isMobile && children}</React.Fragment>;
};

const Desktop: React.FC = ({ children }) => {
  const isDesktop = useMediaQuery({
    query: '(min-width:768px) ',
  });
  return <React.Fragment>{isDesktop && children}</React.Fragment>;
};

export default function Layout() {
  const menu = ['마이페이지', '새 꿀 등록', '인기 꿀'];

  return (
    <React.Fragment>
      <Desktop>
        <DesktopLayout menu={menu}>
          <Router />
        </DesktopLayout>
      </Desktop>
      <Mobile>
        <MobileLayout menu={menu}>
          <Router />
        </MobileLayout>
      </Mobile>
    </React.Fragment>
  );
}

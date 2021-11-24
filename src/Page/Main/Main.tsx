import React from 'react';
import { useMediaQuery } from 'react-responsive';

import { Main as DesktopMain } from '../../desktop';
import { Main as MobileMain } from '../../mobile';

const Desktop = () => {
  const isDesktop = useMediaQuery({ minWidth: 768 });
  return isDesktop ? <DesktopMain /> : null;
};

const Mobile = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return isMobile ? <MobileMain /> : null;
};

export default function Main() {
  return (
    <React.Fragment>
      <Desktop />
      <Mobile />
    </React.Fragment>
  );
}

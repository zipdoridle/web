import React from 'react';
import { useMediaQuery } from 'react-responsive';

import { Mypage as DesktopMypage } from '../../desktop';
import { Mypage as MobileMypage } from '../../mobile';

const Desktop = () => {
  const isDesktop = useMediaQuery({ minWidth: 768 });
  return isDesktop ? <DesktopMypage /> : null;
};

const Mobile = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return isMobile ? <MobileMypage /> : null;
};

export default function Mypage() {
  return (
    <React.Fragment>
      <Desktop />
      <Mobile />
    </React.Fragment>
  );
}

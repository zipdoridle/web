import React from 'react';
import { useMediaQuery } from 'react-responsive';

import { Detail as DesktopDetail } from '../../desktop';
import { Detail as MobileDetail } from '../../mobile';

const Desktop = () => {
  const isDesktop = useMediaQuery({ minWidth: 768 });
  return isDesktop ? <DesktopDetail /> : null;
};

const Mobile = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return isMobile ? <MobileDetail /> : null;
};

export default function Detail() {
  return (
    <React.Fragment>
      <Desktop />
      <Mobile />
    </React.Fragment>
  );
}

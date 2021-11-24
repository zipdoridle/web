import React from 'react';
import { useMediaQuery } from 'react-responsive';

import { Profile as DesktopProfile } from '../../desktop';
import { Profile as MobileProfile } from '../../mobile';

const Desktop = () => {
  const isDesktop = useMediaQuery({ minWidth: 768 });
  return isDesktop ? <DesktopProfile /> : null;
};

const Mobile = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return isMobile ? <MobileProfile /> : null;
};

export default function Profile() {
  return (
    <React.Fragment>
      <Desktop />
      <Mobile />
    </React.Fragment>
  );
}

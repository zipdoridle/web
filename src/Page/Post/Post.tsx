import React from 'react';
import { useMediaQuery } from 'react-responsive';

import { Post as DesktopPost } from '../../desktop';
import { Post as MobilePost } from '../../mobile';

const Desktop = () => {
  const isDesktop = useMediaQuery({ minWidth: 768 });
  return isDesktop ? <DesktopPost /> : null;
};

const Mobile = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return isMobile ? <MobilePost /> : null;
};

export default function Post() {
  return (
    <React.Fragment>
      <Desktop />
      <Mobile />
    </React.Fragment>
  );
}

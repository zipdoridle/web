import React from "react";
import { useMediaQuery } from "react-responsive";
import { Desktop as DesktopMain } from "./desktop/Main";
import { Mobile as MobileMain } from "./mobile/Main";

const Desktop = () => {
  const isDesktop = useMediaQuery({ minWidth: 768 });
  return isDesktop ? <DesktopMain /> : null;
};

const Mobile = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return isMobile ? <MobileMain /> : null;
};

const App = () => (
  <div>
    <Desktop />
    <Mobile />
  </div>
);

export default App;

import React from 'react';
import styled from 'styled-components';

import {
  MobileNameContainer,
  MobileHeader,
  MobileContent,
  MobileLogo,
  MobileSideBar,
  MoboileMainContainer,
} from './mobileStyle';

import { Name, NameSub, Logout, MenuBar, Menu } from './shareStyle';

interface MobileLayoutProps {
  menu: Array<string>;
  children: JSX.Element;
}

export default function MobileLayout({ menu, children }: MobileLayoutProps) {
  return (
    <MoboileMainContainer>
      <MobileHeader>
        <MobileLogo />
        <MobileNameContainer>
          <Name>꿀벌</Name>
          <NameSub>님</NameSub>
          <Logout>로그아웃</Logout>
        </MobileNameContainer>
      </MobileHeader>
      <MobileContent>{children}</MobileContent>
      <MobileSideBar>
        <MenuBar itemType='circle'>
          {menu.map((v) => {
            return <Menu key={v}>{v}</Menu>;
          })}
        </MenuBar>
      </MobileSideBar>
    </MoboileMainContainer>
  );
}

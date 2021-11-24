import React from 'react';

import {
  MainContainer,
  HeaderContainer,
  Content,
  ColumnContainer,
  NameContainer,
  SearchContainer,
  Logo,
} from './desktopStyle';

import { Name, NameSub, Logout, MenuBar, Menu } from './shareStyle';

import { SearchBar } from '../../components/mocules';

interface DesktopLayoutProps {
  menu: Array<string>;
  children: JSX.Element;
}

export default function DesktopLayout({ menu, children }: DesktopLayoutProps) {
  return (
    <MainContainer>
      <HeaderContainer>
        <Logo />
        <ColumnContainer>
          <NameContainer>
            <Name>꿀벌</Name>
            <NameSub>님</NameSub>
            <Logout>로그아웃</Logout>
          </NameContainer>
          <SearchContainer>
            <SearchBar />
          </SearchContainer>
        </ColumnContainer>
      </HeaderContainer>
      <Content>
        <MenuBar itemType='circle'>
          {menu.map((v) => {
            return <Menu key={v}>{v}</Menu>;
          })}
        </MenuBar>
        {children}
      </Content>
    </MainContainer>
  );
}

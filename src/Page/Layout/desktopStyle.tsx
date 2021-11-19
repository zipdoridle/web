import styled from 'styled-components';

import Web_Logo from '../../assets/Web_Logo.svg';

export const Logo = styled.div`
  width: 300px;
  min-width: 300px;
  height: 120px;
  min-height: 120px;

  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${Web_Logo});
`;

export const MainContainer = styled.div`
  width: 100%;
  min-width: 1000px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: auto;
`;

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid #ffcd6b;
`;

export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-itmes: flex-end;
  padding: 30px 50px 20px 0px;
`;

export const NameContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 24px;
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  padding-top: 30px;
  align-items: center;
  position: relative;
`;

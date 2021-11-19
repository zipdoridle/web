import React from 'react';
import styled from 'styled-components';

import Mobile_Logo from '../../assets/Mobile_Logo.svg';

export const MoboileMainContainer = styled.div`
  width: 100%;
  height: 100vh;

  overflow: auto;
  display: flex;
  flex-direction: column;
`;

export const MobileHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: #ffcd6b;
`;

export const MobileLogo = styled.div`
  width: 100px;
  min-width: 100px;
  height: 80px;

  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${Mobile_Logo});
`;

export const MobileNameContainer = styled.div`
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
  padding-right: 15px;
`;

export const MobileContent = styled.div`
  padding-top: 40px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MobileSideBar = styled.div`
  display: none;
`;

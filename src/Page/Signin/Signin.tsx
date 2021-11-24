import React from 'react';

import { SignInLogo } from '../../components/atoms';
import { Container, LogInButton, Kakao } from './style';

const Main = () => (
  <Container>
    <SignInLogo />
    <LogInButton>
      <Kakao />
      카카오로 로그인하기
    </LogInButton>
  </Container>
);

export default Main;

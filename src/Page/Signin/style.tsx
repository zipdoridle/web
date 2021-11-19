import styled from 'styled-components';

import kakaoLogo from '../../assets/kakaoLogo.png';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: auto;
  padding-bottom: 10px;
`;

export const LogInButton = styled.div`
  width: 280px;
  height: 40px;
  min-height: 40px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #fee500;
  font-size: 16px;
  font-weight: 600;

  border-radius: 10px;
`;

export const Kakao = styled.div`
  width: 23px;
  height: 23px;

  margin-right: 10px;

  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${kakaoLogo});
`;

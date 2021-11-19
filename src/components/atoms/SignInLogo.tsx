import styled from 'styled-components';

import LoginLogo from '../../assets/LoginLogo.svg';

export const SignInLogo = styled.div`
  width: 75%;
  height: 130vw;
  max-width: 400px;
  max-height: 500px;

  margin-bottom: 5vh;

  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${LoginLogo});
`;

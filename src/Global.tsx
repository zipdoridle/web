import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const Global = createGlobalStyle`
  ${reset};
  * {
  box-sizing: border-box;
  }
  body {
  }
`;

export default Global;

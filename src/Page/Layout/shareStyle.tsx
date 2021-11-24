import styled from 'styled-components';

export const Name = styled.p`
  width: auto;
  font-size: 18x;
  line-height: 18px;
  margin-right: 6px;
`;

export const NameSub = styled.p`
  width: auto;
  font-size: 14px;
  line-height: 18px;
  margin-right: 20px;
`;

export const Logout = styled.p`
  width: auto;
  font-size: 14px;
  line-height: 130%;
  color: rgba(0, 0, 0, 0.45);
`;

export const MenuBar = styled.ul`
  position: absolute;
  top: 30px;
  left: 50px;

  list-style: initial;
`;

export const Menu = styled.li`
  margin-bottom: 14px;
  font-size: 16px;

  ::marker {
    color: #ffcd6b;
    font-size: 24px;
  }
`;

import React from 'react';
import styled from 'styled-components';

import { SearchInput, SearchIcon } from '../atoms';

const Container = styled.div`
  display: flex;
`;

export default function SearchBar() {
  return (
    <Container>
      <SearchInput />
      <SearchIcon />
    </Container>
  );
}

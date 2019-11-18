import React from 'react';

import InputSection from '../../components/InputSection';
import CapitalSection from '../../components/CapitalsSection';
import { Container, Divider } from './styles';

export default function Main() {
  return (
    <Container>
      <InputSection />
      <Divider />
      <CapitalSection />
    </Container>
  );
}

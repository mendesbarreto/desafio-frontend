import React from 'react';
import { render } from '@testing-library/react';

import InputSection from '~/components/InputSection';

describe('InputSection Component', () => {
  it('contains an input and a title', async () => {
    const { getByPlaceholderText, getByText } = render(<InputSection />);

    expect(getByPlaceholderText('Insira aqui o nome da cidade')).toBeTruthy();
    expect(getByText('Previsão do tempo')).toBeTruthy();
  });
});

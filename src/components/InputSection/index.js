import React, { useState } from 'react';
import { MdSearch } from 'react-icons/md';

import InfoCity from '../InfoCity';
import { Container, InputContainer, Title } from './styles';

export default function InputSection() {
  const [show, setShow] = useState(false);
  const [searchCity, setSearchCity] = useState('');
  const [city, setCity] = useState('');

  function handleChange(e) {
    setSearchCity(e.target.value);
  }

  function handleClose() {
    setShow(false);
    setCity('');
    setSearchCity('');
  }

  async function handleSubmit() {
    if (searchCity !== '') {
      setCity(searchCity);
      setShow(true);
    }
  }

  return (
    <Container>
      <Title>Previsão do tempo</Title>

      <InfoCity show={show} city={city} handleClose={handleClose} />

      <InputContainer>
        <input
          type="text"
          onChange={handleChange}
          placeholder="Insira aqui o nome da cidade"
          onKeyUp={e => {
            if (e.key === 'Enter') handleSubmit();
          }}
          value={searchCity}
        />

        <MdSearch onClick={handleSubmit} size={35} color="#333" />
      </InputContainer>
    </Container>
  );
}

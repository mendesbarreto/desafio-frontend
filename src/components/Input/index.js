import React from 'react';
import { MdSearch } from 'react-icons/md';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Input({ searchCity, setSearchCity, handleSubmit }) {
  return (
    <Container>
      <input
        placeholder="Insira aqui o nome da cidade"
        value={searchCity}
        onChange={e => setSearchCity(e.target.value)}
        onKeyUp={e => (e.key === 'Enter' ? handleSubmit() : null)}
      />
      <MdSearch onClick={handleSubmit} color="#444" size="25px" />
    </Container>
  );
}

Input.propTypes = {
  searchCity: PropTypes.string.isRequired,
  setSearchCity: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

import React, { useState } from 'react';
import * as FontAwesome from 'react-icons/fa';
import api from '../../services/api';

import { Container, WrapInput } from './styles';
import Information from '../../components/Information';
import ListCapitals from '../../components/ListCapitals';

export default function Main() {
  const [input, setInput] = useState('');
  const [capital, setCapital] = useState(null);
  const [error, setError] = useState(false);
  const [disabled, setDisabled] = useState(false);

  function handleChangeInput(e) {
    setError(false);
    setInput(e.target.value);
  }

  async function handleSubmit() {
    setDisabled(true);
    try {
      const response = await api.get(
        `/forecastrss?location=${input},br&u=c&format=json`
      );

      if (response.status === 200) {
        setCapital(response.data);
      }
    } catch (err) {
      console.log('err', err);
      setError(true);
    }
    setDisabled(false);
  }

  function closeBoxCapital() {
    setCapital(null);
  }

  return (
    <Container>
      <div>
        <Information capital={capital} closeBoxCapital={closeBoxCapital} />
      </div>
      <div>
        <WrapInput error={error}>
          <input
            onChange={handleChangeInput}
            placeholder="Enter your city name here"
            type="text"
            disabled={disabled}
          />
          <FontAwesome.FaSearch onClick={handleSubmit} />
        </WrapInput>
      </div>
      <hr />
      <div>
        <ListCapitals />
      </div>
    </Container>
  );
}

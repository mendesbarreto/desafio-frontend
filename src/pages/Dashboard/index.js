import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import Input from '../../components/Input';
import { Container, Diviser, CapitalsContainer } from './styles';
import WeatherHeader from './WeatherMaxMinTitle';
import CapitalList from './CapitalList';
import requestWeather from '../../services/api';
import Card from './Card';

export default function Dashboard() {
  const [firstColumn, setFirstColumn] = useState([]);
  const [secondColumn, setSecondColumn] = useState([]);
  const [current, setCurrent] = useState({});
  const [searchCity, setSearchCity] = useState('');

  useEffect(() => {
    async function getCapital() {
      const response = await Promise.all([
        requestWeather('Rio de Janeiro'),
        requestWeather('Sao Paulo'),
        requestWeather('Belo Horizonte'),
        requestWeather('Brasilia'),
        requestWeather('Belem'),
        requestWeather('Salvador'),
        requestWeather('Curitiba'),
        requestWeather('Fortaleza'),
        requestWeather('Manaus'),
        requestWeather('Joao Pessoa'),
      ]);
      const half = Math.ceil(response.length / 2);
      setFirstColumn([...response.splice(0, half)]);
      setSecondColumn([...response]);
    }
    getCapital();
  }, []);

  async function handleSubmit() {
    const response = await requestWeather(searchCity);
    setCurrent(response);
    if (response.forecasts.length > 0) {
      setSearchCity('');
    } else {
      toast.error('Cidade não encontrada');
    }
  }

  async function handleCancel() {
    setCurrent({});
    setSearchCity('');
  }

  return (
    <Container current={current}>
      <div>
        <h1>Previsão do tempo</h1>
        {current.location && current.location.city && (
          <Card weather={current} handleCancel={handleCancel} ß />
        )}
        <Input
          searchCity={searchCity}
          setSearchCity={setSearchCity}
          handleSubmit={handleSubmit}
        />
        <Diviser />
        <CapitalsContainer>
          <h2>Capitais</h2>
          <div>
            <div>
              <WeatherHeader />
              <CapitalList list={firstColumn} />
            </div>
            <div>
              <WeatherHeader />
              <CapitalList list={secondColumn} />
            </div>
          </div>
        </CapitalsContainer>
      </div>
    </Container>
  );
}

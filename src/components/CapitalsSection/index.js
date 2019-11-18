import React, { useEffect, useState } from 'react';

import requestWeather from '../../services/api';
import { Container, Loading, Table } from './styles';

export default function CapitalsSection() {
  const [capitals, setCapitals] = useState([]);
  const [monted, setMonted] = useState(false);

  useEffect(() => {
    async function loadWeather() {
      await Promise.all([
        requestWeather('Rio de janeiro'),
        requestWeather('São Paulo'),
        requestWeather('Belo Horizonte'),
        requestWeather('Brasilia'),
        requestWeather('Belém'),
        requestWeather('Salvador'),
        requestWeather('Curitiba'),
        requestWeather('Fortaleza'),
        requestWeather('Manaus'),
        requestWeather('João Pessoa'),
      ]).then(values => {
        setCapitals(values);
        setMonted(true);
      });
    }

    loadWeather();
  }, []);
  return (
    <Container>
      {monted ? (
        <div>
          <h2>Capitais</h2>
          <div>
            <Table>
              <thead>
                <tr>
                  <th>Min</th>
                  <th>Max</th>
                </tr>
              </thead>
              <tbody>
                {capitals.splice(0, 5).map(item => (
                  <tr key={item.location.city}>
                    <th>{item.forecasts[0].low}°</th>
                    <th>{item.forecasts[0].high}°</th>
                    <th>{item.location.city}</th>
                  </tr>
                ))}
              </tbody>
            </Table>
            <Table>
              <thead>
                <tr>
                  <th>Min</th>
                  <th>Max</th>
                </tr>
              </thead>
              <tbody>
                {capitals.map(item => (
                  <tr key={item.location.city}>
                    <th>{item.forecasts[0].low}°</th>
                    <th>{item.forecasts[0].high}°</th>
                    <th>{item.location.city}</th>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      ) : (
        <Loading>
          <h1>Carregando...</h1>
        </Loading>
      )}
    </Container>
  );
}

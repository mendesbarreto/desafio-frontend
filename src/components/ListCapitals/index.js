import React, { useState, useEffect } from 'react';
import { api, refreshToken } from '../../services/api';

import { Container, ListCitys } from './styles';

const capitalsNames = [
  'Rio de Janeiro',
  'São Paulo',
  'Belo Horizonte',
  'Brasilia',
  'Belém',
  'Salvador',
  'Curitiba',
  'Fortaleza',
  'Manaus',
  'João Pessoa',
];

export default function ListCapitals() {
  const [capitals, setCapitals] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const newCapitals = await Promise.all(
          capitalsNames.map(async capital => {
            const response = await api.get(
              `/forecastrss?location=${capital},br&u=c&format=json`
            );
            if (response.status === 200) {
              return response.data;
            }
            return null;
          })
        );

        if (newCapitals[0]) {
          setCapitals(newCapitals);
        }
      } catch (err) {
        console.log('err', err.response);
      }
    };
    fetchData();
  }, []);

  return (
    <Container>
      <h2>Capitals</h2>
      <div>
        <ListCitys>
          <div>
            <div>
              <span>Min</span> <span>Max</span>
            </div>
            <div>
              <span>Min</span> <span>Max</span>
            </div>
          </div>
          <ul>
            {capitals.map((capital, index) => {
              const { forecasts, location } = capital;
              const today = forecasts[0];
              return (
                <li key={String(index)}>
                  <span>
                    <span>{Math.round(today.low)}º</span>
                    <span>{Math.round(today.high)}º</span>
                  </span>
                  <span>{location.city}</span>
                </li>
              );
            })}
          </ul>
        </ListCitys>
      </div>
    </Container>
  );
}

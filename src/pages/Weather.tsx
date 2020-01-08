import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom";

import Header from '../components/Header';
import SearchBox from '../components/SearchBox';
import BoxCity from '../components/BoxCity';
import ListCapitals from "../components/ListCapitals";
import Hr from "../components/Hr";

import WeatherService from '../services/weather.service';
import AuthService from "../services/auth.service";

import { WeatherLocationResponse } from "../types";

import "./Weather.css"

const Weather: React.FC = () => {
  const history = useHistory();

  const [weatherCapitals, setWeatherCapitals] = useState(Array<WeatherLocationResponse>());
  const [currentCity, setCurrentCity] = useState({} as WeatherLocationResponse);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    checkStateUser();
  }, [])

  async function checkStateUser() {
    if (AuthService.hasToken === false) {
      return history.push('/autorization');
    }

    if (AuthService.tokenHasExpired) {
      await AuthService.refreshToken();
    }

    onFetchData();
  }

  function onFetchData() {
    setLoading(true);
    fetchWeatherCapitals();
  }

  async function fetchWeatherCapitals() {
    const capitals: string[] = require('../assets/capitals.json')['capitals'];
    const dataWeathers: any[] = [];

    for (let index = 0; index < capitals.length; index++) {
      const capital = capitals[index];
      const res = await WeatherService.getByCity(capital);

      dataWeathers.push(res.data);
    }

    setWeatherCapitals(dataWeathers);
    setLoading(false);
  }

  function onSelectCity(_currentCity: WeatherLocationResponse) {
    setCurrentCity(_currentCity);
  }

  function onSearch(term: string) {
    WeatherService.getByCity(term)
      .then(res => setCurrentCity(res.data));
  }

  return (
    <div className="weather-page">
      <div className="wrapper">
        <Header title={"Previsão do Tempo"} />
        {!!currentCity.current_observation && (
          <BoxCity
            city={currentCity.location.city}
            temperature={currentCity.current_observation.condition.temperature}
            condition={currentCity.current_observation.condition.text}
            forecasts={currentCity.forecasts}
            onClose={() => setCurrentCity({} as WeatherLocationResponse)} />
        )}
        <SearchBox onSearch={onSearch} />
        <Hr />
        <ListCapitals capitals={weatherCapitals} isLoading={loading} onSelect={onSelectCity} />
      </div>
    </div>
  )
}

export default Weather;

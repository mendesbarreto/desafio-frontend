import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom";

import Header from '../components/Header';
import SearchBox from '../components/SearchBox';
import BoxCity from '../components/BoxCity';
import BoxWeekWeather from "../components/BoxWeekWeather";
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

  useEffect(() => {
    checkStateUser();
  }, [])

  async function checkStateUser() {
    if (AuthService.hasToken) {
      if (AuthService.tokenHasExpired) {
        await AuthService.refreshToken();
      }
    } else {
      history.push('/autorization');
    }

    onFetchData();
  }

  function onFetchData() {
    fetchWeatherCapitals();
  }

  async function fetchWeatherCapitals() {
    const capitals: string[] = require('../assets/capitals.json')['capitals'];
    const dataWeathers: any[] = [];

    for (let index = 0; index < capitals.length; index++) {
      const capital = capitals[index];
      const res = await WeatherService.getByCity(capital)

      dataWeathers.push(res.data)
    }

    setWeatherCapitals(dataWeathers)
  }

  function onSelectCity(_currentCity: WeatherLocationResponse) {
    setCurrentCity(_currentCity);
  }

  function onSearch(term: string) {
    WeatherService.getByCity(term)
      .then(res => setCurrentCity(res.data));
  }

  const CityCurrentCondition = () => {
    console.log(currentCity);
    if (!!currentCity.current_observation) {
      return (
        <div className="shadow-1">
          <BoxCity
            city={currentCity.location.city}
            temperature={currentCity.current_observation.condition.temperature}
            condition={currentCity.current_observation.condition.text} />
          <Hr color="var(--dark-orange)" />
          <BoxWeekWeather week={currentCity.forecasts || []} />
        </div>
      );
    } else {
      return null;
    }
  }

  return (
    <div className="weather-page">
      <div className="wrapper">
        <Header title={"Previsão do Tempo"} />
        <CityCurrentCondition />
        <SearchBox onSearch={onSearch} />
        <Hr />
        <ListCapitals capitals={weatherCapitals} onSelect={onSelectCity} />
      </div>
    </div>
  )
}

export default Weather;

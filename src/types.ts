export interface WeatherLocationResponse {
  location: Location;
  current_observation: CurrentObservation;
  forecasts: Forecast[];
}

export interface CurrentObservation {
  wind: Wind;
  atmosphere: Atmosphere;
  astronomy: Astronomy;
  condition: Condition;
  pubDate: number;
}

export interface Astronomy {
  sunrise: string;
  sunset: string;
}

export interface Atmosphere {
  humidity: number;
  visibility: number;
  pressure: number;
  rising: number;
}

export interface Condition {
  text: Text;
  code: number;
  temperature: number;
}

export enum Text {
  MostlyCloudy = "Mostly Cloudy",
  PartlyCloudy = "Partly Cloudy",
}

export interface Wind {
  chill: number;
  direction: number;
  speed: number;
}

export interface Forecast {
  day: string;
  date: number;
  low: number;
  high: number;
  text: Text;
  code: number;
}

export interface Location {
  woeid: number;
  city: string;
  region: string;
  country: string;
  lat: number;
  long: number;
  timezone_id: string;
}

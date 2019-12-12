import { getEnvs, loadToken } from '../utils';
import { ProxedService } from './proxed.service';

interface Location {
  latitude: number;
  longitude: number;
}

class WeatherService extends ProxedService {

  private comsumerKey: string;
  private appId: string;

  constructor() {
    const { REACT_APP_CONSUMER_KEY, REACT_APP_APP_ID, REACT_APP_API_WEATHER_YAHOO } = getEnvs();

    super(REACT_APP_API_WEATHER_YAHOO!!);

    this.comsumerKey = REACT_APP_CONSUMER_KEY!!;
    this.appId = REACT_APP_APP_ID!!;
  }


  private get token() {
    return loadToken();
  }

  private get headers() {
    return {
      "Authorization": `Bearer ${this.token}`,
    }
  }

  getByCity(city: string, country = "", unit = "c") {
    return this.api.get(`/forecastrss?location=${city},${country}&u=${unit}&format=json`, { headers: this.headers })
  }

  getByLocation(location: Location) {
    const lat = location.latitude.toString().substr(0, 7);
    const lon = location.longitude.toString().substr(0, 7);

    return this.api.get(`/forecastrss?lat=${lat}&lon${lon}&format=json`, { headers: this.headers })
  }
}

export default new WeatherService();

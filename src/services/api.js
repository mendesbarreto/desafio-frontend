import oauth from 'oauth';

const api = new oauth.OAuth(
  null,
  null,
  process.env.REACT_APP_CLIENT_ID,
  process.env.REACT_APP_CLIENT_SECRET,
  '1.0',
  null,
  'HMAC-SHA1',
  null,
  {
    'X-Yahoo-App-Id': process.env.REACT_APP_APP_ID,
  }
);

const requestWeather = city =>
  new Promise((resolve, reject) => {
    api.get(
      `https://weather-ydn-yql.media.yahoo.com/forecastrss?location=${city}&format=json&u=c&lang=pt-BR`,
      null,
      null,
      (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(JSON.parse(data));
        }
      }
    );
  });

export default requestWeather;

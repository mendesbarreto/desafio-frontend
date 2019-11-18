import OAuth from 'oauth';

const header = {
  'X-Yahoo-App-Id': process.env.REACT_APP_APP_ID,
};
const request = new OAuth.OAuth(
  null,
  null,
  process.env.REACT_APP_CONSUMER_KEY,
  process.env.REACT_APP_CONSUMER_SECRET,
  '1.0',
  null,
  'HMAC-SHA1',
  null,
  header
);

const requestWeather = choiceCity =>
  new Promise((resolve, reject) => {
    request.get(
      `https://weather-ydn-yql.media.yahoo.com/forecastrss?location=${choiceCity}&format=json&u=c&lang=pt-BR`,
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

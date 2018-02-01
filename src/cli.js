const request = require('request')
const parse = require('./parse.js')

request('http://services.swpc.noaa.gov/text/3-day-forecast.txt', (err, response, body) => {
  if (err) {
    console.error(err);
  } else {
    console.log('# Text');
    console.log(body);
    console.log('\n\n# Parsed');
    try {
      console.log(parse(body));
    } catch (e) {
      console.error(e);
    }
  }
});

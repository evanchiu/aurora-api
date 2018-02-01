const request = require('request')
const parse = require('./parse.js')

exports.handler = function main(event, context, lambdaCallback) {
  request('http://services.swpc.noaa.gov/text/3-day-forecast.txt', (err, response, body) => {
    if (err) {
      console.error(err);
      done(502, '{"message", "Error retrieving noaa data"}', 'application/json', lambdaCallback);
    } else {
      try {
        let response = parse(body);
        done(200, JSON.stringify(response), 'application/json', lambdaCallback);
      } catch (e) {
        console.error(e);
        done(502, '{"message", "Error parsing noaa data"}', 'application/json', lambdaCallback);
      }
    }
  });
};

// We're done with this lambda, return to the client with given parameters
function done(statusCode, body, contentType, lambdaCallback, isBase64Encoded = false) {
  lambdaCallback(null, {
    statusCode: statusCode,
    isBase64Encoded: isBase64Encoded,
    body: body,
    headers: {
      'Content-Type': contentType
    }
  });
}

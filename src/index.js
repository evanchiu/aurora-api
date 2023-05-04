const axios = require("axios");
const parse = require("./parse.js");

exports.handler = async function main() {
  try {
    const response = await axios.get(
      "http://services.swpc.noaa.gov/text/3-day-forecast.txt"
    );
    const body = parse(response.data);
    return {
      statusCode: 200,
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    };
  } catch (e) {
    console.error(e);
    return {
      statusCode: 502,
      body: '{"message", "Error retrieving/parsing noaa data"}',
      headers: {
        "Content-Type": "application/json",
      },
    };
  }
};

const axios = require("axios");
const parse = require("./parse.js");

async function main() {
  try {
    const response = await axios.get(
      "http://services.swpc.noaa.gov/text/3-day-forecast.txt"
    );
    console.log("# Text");
    console.log(response.data);
    console.log("\n\n# Parsed");
    console.log(parse(response.data));
  } catch (e) {
    console.error(e);
  }
}

main();

module.exports = function(text) {

  // Parse the issued date
  let issuedMatch = text.match(/Issued: (\d+) (\w+) (\d+) (\d{2})(\d{2}) UTC/);
  if (!issuedMatch) { throw new Error('Failed to parse issued timestamp'); }
  let issued = new Date(issuedMatch[1] + ' ' + issuedMatch[2] + ' ' + issuedMatch[3] + ' '
    + issuedMatch[4] + ':' + issuedMatch[5] + ' UTC');
  let year = issuedMatch[1];

  // Parse the breakdown dates
  let datesMatch = text.match(/([A-Z][a-z]{2}) ([0-9]{2})\s+([A-Z][a-z]{2}) ([0-9]{2})\s+([A-Z][a-z]{2}) ([0-9]{2})/);
  if (!datesMatch) { throw new Error('Failed to parse issued dates'); }

  // Capture the data rows
  let dataMatch = text.match(/(\d{2})-(\d{2})UT\s+(\d)\s+(\d)\s+(\d)/g);
  if (!dataMatch || !dataMatch.length == 8) { throw new Error('Failed to find data'); }

  // Parse the data rows
  let breakdown = [];
  for (let i = 0; i < dataMatch.length; i++) {
    let lineMatch = dataMatch[i].match(/(\d{2})-(\d{2})UT\s+(\d)\s+(\d)\s+(\d)/);
    if (!lineMatch) { throw new Error('Failed to parse line'); }

    // Store entry for each column
    breakdown.push({
      start: new Date([year, datesMatch[1], datesMatch[2], lineMatch[1] + ':00', 'UTC'].join(' ')),
      kp: lineMatch[3]
    });
    breakdown.push({
      start: new Date([year, datesMatch[3], datesMatch[4], lineMatch[1] + ':00', 'UTC'].join(' ')),
      kp: lineMatch[4]
    });
    breakdown.push({
      start: new Date([year, datesMatch[5], datesMatch[6], lineMatch[1] + ':00', 'UTC'].join(' ')),
      kp: lineMatch[5]
    });
  }

  return {
    issued,
    breakdown
  }
}

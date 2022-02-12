export const totals = (hometotals, awaytotals) => {
  let totalsArray = [];
  for (var i = 0; i < hometotals.length; i++) {
    const quarter = {
      home: hometotals[i],
      away: awaytotals[i],
      total: hometotals[i] + awaytotals[i],
    };
    totalsArray.push(quarter);
  }
  return totalsArray;
}
export const makeMoney = (homeTotal, awayTotal, minutesPlayed, line, quarterTots) => {
  let resultsObject = {};
  const total = homeTotal + awayTotal;
  const ptsPerQuarter = Math.round((total / (minutesPlayed / 12)));
  const expectedTotal = ptsPerQuarter * 4;
  resultsObject.ptsPerQuarter = ptsPerQuarter;
  resultsObject.expectedtotal = expectedTotal;
  if (quarterTots) {
    let revisedHomeDiff = 0;
    let revisedHomeAverage = 0;
    let revisedAwayDiff = 0;
    let revisedAwayAverage = 0;
    let revisedTotalDiff = 0;
    let revisedTotalAverage = 0;

    for (var i = 0; i < quarterTots.length; i++) {
      revisedHomeAverage = revisedHomeAverage += quarterTots[i].home;
      revisedAwayAverage = revisedAwayAverage += (quarterTots[i].away);
      revisedTotalAverage = revisedTotalAverage += (quarterTots[i].total);
    }

    revisedHomeAverage = revisedHomeAverage / quarterTots.length;
    revisedTotalAverage = revisedTotalAverage / quarterTots.length;
    revisedAwayAverage = revisedAwayAverage / quarterTots.length;
    for (var i = 0; i < quarterTots.length; i++) {
      revisedHomeDiff = Math.round(revisedHomeDiff += (revisedHomeAverage - quarterTots[i].home));
      revisedAwayDiff = Math.round(revisedAwayDiff += (revisedAwayAverage - quarterTots[i].away));
      revisedTotalDiff = Math.round(revisedTotalDiff += (revisedTotalAverage - quarterTots[i].total));
    }
    const revisedTotal = Math.round(revisedTotalDiff + revisedHomeDiff + revisedAwayDiff + expectedTotal);
    if (revisedTotal + .5 > line) {
      console.log('Expected: Over');
      console.log('Expected Difference: ', revisedTotal - line);
      return;
    }
    if (revisedTotal + .5 < line) {
      console.log('Expected: Under');
      console.log('Expected Difference: ', line - revisedTotal);
      return;
    } else if (revisedTotal + .5 === line || (line - revisedTotal < 2)) {
      console.log('Wait, too close')
      return;
    }
  }
  if (expectedTotal + .5 > line) {
    resultsObject.expected = "Over"
    resultsObject.difference = expectedTotal - line;
    return resultsObject;
  } else if (expectedTotal + .5 < line) {
    resultsObject.expected = "Under";
    resultsObject.difference = line - expectedTotal;
    return resultsObject;
  } else if (expectedTotal + .5 === line || (line - expectedTotal) < 2) {
    resultsObject.expected = "Wait";
    resultsObject.difference = "Too Close";
    return resultsObject;
  }
}
  //Format: makeMoney(HomeTotalPts, AwayTotalPts, Minutes Played, Line, totals([homefirstQuarter, home2ndQuarter, home3rdQuarter, home4thquarter], [away1stQuarter, away2ndQuarter, away3rdQuarter, away4thQuarter]));

  //totals() parameter is optional, for shorthand use just the 5 first parameters

  //shorthand example: makeMoney(74, 104, 36, 237.5);
  //longform example: makeMoney(74, 104, 36, 237.5, totals([27, 28, 19], [38, 32, 34]));

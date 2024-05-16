export function media(data) {
  const response = {};
  for (const year in data) {
    for (const month in data[year]) {
      response[month + "/" + year] = 0;

      for (const item of data[year][month]) {
        response[month + "/" + year] += Number(item.adjClose);
      }
      response[month + "/" + year] /= data[year][month].length;
    }
  }
  return response;
}

export function mediana(data) {
  const response = {};
  for (const year in data) {
    for (const month in data[year]) {
      const sorted = data[year][month].sort((a, b) => a.adjClose - b.adjClose);

      const half = Math.floor(sorted.length / 2);

      if (sorted.length % 2)
        response[month + "/" + year] = sorted[half].adjClose;
      else
        response[month + "/" + year] =
          (Number(sorted[half - 1].adjClose) + Number(sorted[half].adjClose)) /
          2.0;
    }
  }
  return response;
}

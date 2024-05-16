export function createMediaCSV(data) {
  let response = "Data, Media";
  for (const date in data) {
    response = response + "\n" + date + "," + data[date];
  }
  return response;
}

export function createMedianaCSV(data) {
  let response = "Data, Mediana";
  for (const date in data) {
    response = response + "\n" + date + "," + data[date];
  }
  return response;
}

import fs from "node:fs";

export async function parseCSV() {
  return new Promise((resolve, reject) => {
    const parsedData = {};
    fs.readFile("./src/dataset/NVDA.csv", "utf8", (err, data) => {
      if (err) return reject(err);

      const splittedData = data.split("\n").slice(1);

      for (const row of splittedData) {
        const items = row.split(",");
        const [year, month] = items[0].split("-");

        if (parsedData[year] === undefined) {
          parsedData[year] = {};
        }
        if (parsedData[year][month] === undefined) {
          parsedData[year][month] = [];
        }

        parsedData[year][month].push({
          date: items[0],
          open: items[1],
          high: items[2],
          low: items[3],
          close: items[4],
          adjClose: items[5],
          volume: items[6],
        });
      }
      resolve(parsedData);
    });
  });
}

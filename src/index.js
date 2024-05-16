import { parseCSV } from "./utils/parseCSV.js";
import { media, mediana } from "./utils/generateData.js";
import { createMediaCSV, createMedianaCSV } from "./utils/createCSV.js";
import fs from "node:fs";

async function main() {
  const parsedCSV = await parseCSV();
  const responseMedia = media(parsedCSV);
  const responseMediana = mediana(parsedCSV);

  fs.writeFileSync("src/output/media.csv", createMediaCSV(responseMedia));
  fs.writeFileSync("src/output/mediana.csv", createMedianaCSV(responseMediana));

  console.log("All done!");
}
main();

// import fs from "node:fs";
// import { Transform } from "node:stream";
// import { pipeline } from "node:stream/promises";

// const inputFile = "./csvfiles/1.csv";
// const outputFile = "./output.json";

// const csvToJson = new Transform({
//   transform(chunk, encoding, callback) {
//     const data = chunk.toString();

//     console.log("Received chunk:", data.length, "bytes");

//     callback();
//   }
// });

// try {
//   await pipeline(
//     fs.createReadStream(inputFile),
//     csvToJson,
//     fs.createWriteStream(outputFile)
//   );

//   console.log("Done!");
// } catch (error) {
//   console.error("Error:", error.message);
// }




import fs from "node:fs";
import { Transform } from "node:stream";
import { pipeline } from "node:stream/promises";

const inputFile = "./csvfiles/500mb.csv";
const outputFile = "./wrongfolder/output-500mb.json";

let leftover = "";
let headers = null;
let firstRow = true;

const csvToJson = new Transform({
  transform(chunk, encoding, callback) {
    try {
      leftover += chunk.toString();

      const lines = leftover.split("\n");

      // Keep incomplete line for the next chunk
      leftover = lines.pop();

      for (const line of lines) {
        if (!line.trim()) continue;

        // First line = CSV headers
        if (!headers) {
          headers = line.trim().split(",");

          this.push("[\n");

          continue;
        }

        const values = line.trim().split(",");

        const user = {};

        headers.forEach((header, index) => {
          user[header] = values[index];
        });

        if (!firstRow) {
          this.push(",\n");
        }

        this.push(JSON.stringify(user));

        firstRow = false;
      }

      callback();
    } catch (error) {
      callback(error);
    }
  },

  flush(callback) {
    this.push("\n]\n");
    callback();
  }
});

try {
  await pipeline(
    fs.createReadStream(inputFile),
    csvToJson,
    fs.createWriteStream(outputFile)
  );

  console.log("CSV converted successfully!");
} catch (error) {
  console.error("Pipeline error:", error.message);
}

import fs from "node:fs";

const file = fs.createWriteStream("./csvfiles/500mb.csv");
file.write("name,email,role\n");
let i = 1;
let size = 0;
const target = 500 * 1024 * 1024;

function write() {
  let ok = true;

  while (ok && size < target) {
    const row = `User${i},user${i}@gmail.com,user\n`;

    size += Buffer.byteLength(row);
    ok = file.write(row);

    i++;
  }

  if (size < target) {
    file.once("drain", write);
  } else {
    file.end();
    console.log(
      `Created ${(size / 1024 / 1024).toFixed(2)} MB`
    );
  }
}

write();

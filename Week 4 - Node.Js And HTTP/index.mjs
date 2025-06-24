import chalk from "chalk";
import fs from "fs";
import path from "path";

function main(fileName) {
  fs.readFile(fileName, "utf-8", function (err, data) {
    let total = 0;
    for (let i = 0; i < data.length; i++) {
      console.log(data[i]);
      if (data[i] === " ") {
        total++;
      }
    }
    console.log(total + 1);
  });
}

main("a.txt");
main(process.argv[2]);

// console.log(path.join(__dirname, "index.mjs"));

console.log(chalk.blue("Hello World"));

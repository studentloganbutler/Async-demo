import { promises as fs, readFile } from "fs";
import { writeFile } from "fs/promises";

fs.readFile("./package.json", "utf-8")
  // 'then' is for RESOLVED/FULFILLED promises
  .then((fileContents) => {
    fs.writeFile("./test.json", fileContents);
  })
  .then(() => {
    console.log(`Finished writing the file.`);
  })
  .then(() => {
    fs.readFile("./test.json", "utf-8");
  })
  .then(() => fs.readFile("./test.json", "utf-8"))
  .then((testFileResults) => {
    console.log(testFileResults);
  })
  // Catch is for REJECTED promises
  .catch((err) => {
    console.error(`Error while reading file, ${err.message}`);
  })
  .finally(() => {
    console.log("This will run no matter what. This promise has been SETTLED.");
  });

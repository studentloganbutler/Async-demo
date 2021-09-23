import { promises as fs } from "fs";

fs.readFile("./package.json")
  // 'then' is for RESOLVED promises
  .then((fileContents) => {
    console.log(fileContents);
    // Catch is for REJECTED promises
  })
  .catch((err) => {
    console.error(`Error while reading file, ${err.message}`);
  })
  .finally(() => {
    console.log(
      "This will run no matter what. This promise has been fulfilled."
    );
  });

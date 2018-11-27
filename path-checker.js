const fs = require("fs"); // Allows for writing and reading to a file
const readline = require("readline"); // Read each line of file
const fetch = require("isomorphic-unfetch"); // used to fetch API and test if links are giving 200s

let SuccessWriteStream = fs.createWriteStream("success.yml");
let FailureWriteStream = fs.createWriteStream("failure.yml");

const initiate = async fileName => {
  // Check if user doesn't specify file name, it will use paths.yml
  if (!fileName) {
    console.log("You are using default file called paths.yml");
    fileName = "paths.yml";
  }

  // Check if file is existed
  const isFileExisted = fs.existsSync(fileName);

  if (!isFileExisted) {
    console.log(`${fileName} file does't exist`);
    return;
  }

  let lineReader = readline.createInterface({
    input: fs.createReadStream(fileName)
  });

  lineReader.on("line", async function(line) {
    let encodedURL = encodeURI(line);
    let articleURL = await fetch(encodedURL);

    if (articleURL.status == 200) {
      console.log("Success: " + encodedURL);
      SuccessWriteStream.write(encodedURL + "\n");
    } else {
      console.log("Failure: " + encodedURL);
      FailureWriteStream.write(encodedURL + "\n");
    }
  });
};

initiate();

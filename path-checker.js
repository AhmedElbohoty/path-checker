const fs = require('fs'); // Allows for writing and reading to a file
const readline = require('readline'); // Read each line of file
const fetch = require('isomorphic-unfetch'); // used to fetch API and test if links are giving 200s

let SuccessWriteStream = fs.createWriteStream('success.yml');
let FailureWriteStream = fs.createWriteStream('failure.yml');

const initiate = async () => {
  let lineReader = readline.createInterface({
    input: fs.createReadStream('paths.yml')
  });

  lineReader.on('line', async function (line) {
    let encodedURL = encodeURI(line)
    let articleURL = await fetch(encodedURL);
    
    if (articleURL.status == 200) {
      console.log('Success: ' + encodedURL);
      SuccessWriteStream.write(encodedURL + '\n');
    } else {
      console.log('Failure: ' + encodedURL);
      FailureWriteStream.write(encodedURL + '\n');
    }
  });
};

initiate();

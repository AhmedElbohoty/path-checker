const fs = require('fs'); // Allows for writing and reading to a file
const readline = require('readline'); // Read each line of file
const fetch = require('isomorphic-unfetch'); // used to fetch API and test if links are giving 200s

const initiate = async () => {
  var lineReader = readline.createInterface({
    input: fs.createReadStream('paths.yml')
  });

  lineReader.on('line', async function (line) {
    let articleURL = await fetch(encodeURI(line));
    if (articleURL.status == 200) {
      console.log('Success: ' + encodeURI(line));
    } else {
      console.log('Failure: ' + encodeURI(line))
    }
  });
};

initiate();

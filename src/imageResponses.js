const fs = require('fs'); //    pull in the file system module

const image = fs.readFileSync(`${__dirname}/../client/spongegar.png`);

const getImage = (request, response) => {
  //    https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types
  response.writeHead(200, { 'Content-Type': 'image/png' });
  response.write(image);
  response.end();
};

module.exports = {
  getImage,
};

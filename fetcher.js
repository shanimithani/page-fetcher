const request = require("request");
const fs = require("fs");

const url = process.argv[2];
const filePath = process.argv[3];

const downloadResource = (url, filePath) => {
  request(url, (error, response, body) => {
    if (error) {
      console.log("Error:", error);
    } else if (response.statusCode !== 200) {
      console.log("Request failed with status code", response.statusCode);
    } else {
      fs.writeFile(filePath, body, (error) => {
        if (error) {
          console.log("Error:", error);
        } else {
          const fileSize = body.length;
          console.log(`Downloaded and saved ${fileSize} bytes to ${filePath}`);
        }
      });
    }
  });
};

downloadResource(url, filePath);

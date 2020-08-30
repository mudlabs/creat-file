const fs = require("fs");

const data = `## Project Title\r\nDiamond Blade :smile:`;

fs.writeFile("README.md", data, callback => {
  console.log("callback", callback);
});

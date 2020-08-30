const fs = require("fs");

const body = "## Project Title\r\nAxel White";
const data = `${body}`;

fs.writeFile("README.md", data, callback => {
  console.log("callback", callback);
});

const fs = require("fs");

const body = "## Project Title\r\nAxel White";

fs.writeFile("README.md", `${body}`, callback => {
  console.log("callback", callback);
});

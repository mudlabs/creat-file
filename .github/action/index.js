const fs = require("fs");

const body = "## Project Title\r\nAxel White";

fs.writeFile("Axel White/README.md", `${body}`, callback => {
  console.log("callback", callback);
});

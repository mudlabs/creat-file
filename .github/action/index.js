const fs = require("fs");

const body = "## Project Title\r\nAxel White";

fs.mkdirSync("Axel White");
fs.writeFile("./Axel White/README.md", "## Axel White", c => {
   if (c) return;
   console.log("Saved");
});

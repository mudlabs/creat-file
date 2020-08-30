const fs = require("fs");

const body = "## Project Title\r\nAxel White";

fs.mkdirSync("project");
fs.writeFile("./project/README.md", "MY README", c => {
   if (c) return;
   console.log("Saved");
});

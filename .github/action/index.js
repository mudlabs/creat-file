const fs = require("fs");

const body = "## Project Title\r\nAxel White";

if (!fs.existsSync("Axel White")) {
   fs.mkdir("Axel White", err => {
      if (err) return err;
      fs.writeFile("./Axel White/README.md", "## Axel White", err => {
         if(err) return err;
         console.log("Directory and File saved.");
      });
   });
}


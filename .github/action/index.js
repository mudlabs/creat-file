const fs = require("fs");

const now = Date.now();
const body = `## Project Title\r\n${now}`;

if (!fs.existsSync(`${now}`)) {
   fs.mkdir(`${now}`, err => {
      if (err) return err;
      fs.writeFile(`./${now}/README.md`, `## ${now}`, err => {
         if(err) return err;
         console.log("Directory and File saved.");
      });
   });
}


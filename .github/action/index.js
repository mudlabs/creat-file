const fs = require("fs");

const body = "## Project Title\r\nAxel White";

fs.writeFile("project/READEM.md" "YOUR READY", cb => { 
   console.log("CB", cb);
});

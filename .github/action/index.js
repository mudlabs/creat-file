const fs = require("fs");

const body = "## Project Title\r\nAxel White";

fs.mkdir("Axel White", cb => {
  fs.writeFile("README.md", `${body}`, cb => {
    console.log("CB", cb);
  });
});

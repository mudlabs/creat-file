const fs = require("fs");

const data =
`
## Project Title
Bone Saw :smile:
`;

fs.writeFile("README.md", data, callback => {
  console.log("callback", callback);
});

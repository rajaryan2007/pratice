const path = require('path');

console.log("directory name:",path.dirname(__filename));

console.log('file name ', path.basename(__filename));

console.log("file extension" ,path.extname(__filename));

const joinPath = path.join("/user","document","node","4");
console.log("joined path",joinPath);

const resolvePath = path.resolve("user","document","node","project");
console.log("resolve path:",resolvePath);


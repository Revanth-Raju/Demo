
// let data = require("./app");

// console.log(data.num);
// console.log(data.check())
// console.log(data.arr)


const fs = require('fs');

fs.writeFileSync("demo.txt", "Hi, I'm Revanth..!");

fs.appendFileSync("demo.txt", "I am updated using appendFileSync in FS module...!");

const buffData = fs.readFileSync("demo.txt", "utf-8");

// const data = buffData.toString();

// console.log(data);

console.log(buffData);

fs.renameSync("demo.txt", "Demo.txt");

fs.unlinkSync("Demo.txt");


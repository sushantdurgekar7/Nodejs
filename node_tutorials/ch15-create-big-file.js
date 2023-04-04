// const { writeFileSync } = require('fs')
// for (let i = 0; i < 10000; i++) {
//   writeFileSync('./content/big.txt', `hello world ${i}\n`, { flag: 'a' })
// }
const { writeFileSync } = require("fs");

for (let i = 0; i < 100000; i++) {
  writeFileSync(
    "./content/big_text.txt",
    `Welcom to Hello World!! to User ${i}\n`,
    {
      flag: "a",
    }
  );
}

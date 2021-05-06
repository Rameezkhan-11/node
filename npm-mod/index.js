const chalk = require("chalk");
console.log(chalk.blue("Hello wolrd"));
const validator = require("validator");
const res = validator.isEmail("rameezkhansadozai@gmail.com");
console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res));
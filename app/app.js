const nameFunction = require("../name/name.js");
const hobbies = require("../hobbies/hobbies.js");

function user () {
    const userObj = {
    fullName: nameFunction("Giuseppe", "Casaburi"),
    hobby: hobbies("Calcio", "Basket", "Tennis")
    }

    return userObj;
}

console.log(chalk.blue(user()));

import nameFunction from "../name/name.js";
import hobbies from "../hobbies/hobbies.js";
import chalk from "chalk";

function user () {
    const userObj = {
    fullName: nameFunction("Giuseppe", "Casaburi"),
    hobby: hobbies("Calcio", "Basket", "Tennis")
    };
    return userObj;
};

console.log(chalk.yellow(JSON.stringify(user(), null, 2)));
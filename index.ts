import inquirer from "inquirer";

const answer = await inquirer.prompt([
    { message: "Enter your first number", type: "number", name: "firstNumber" },
    { message: "Enter your second number", type: "number", name: "secondNumber" },
    { message: "Select one of the operators to perform an action", type: "list", name: "operator", choices: ["Plus", "Minus", "Multiply", "Divide"] }
]);
// Conditional statement
if (answer.operator === "Plus") {
    console.log(answer.firstNumber + answer.secondNumber);
} else if (answer.operator === "Minus") {
    console.log(answer.firstNumber - answer.secondNumber);
} else if (answer.operator === "Multiply") {
    console.log(answer.firstNumber * answer.secondNumber);
} else if (answer.operator === "Divide") {
    console.log(answer.firstNumber / answer.secondNumber);
} else {
    console.log("Please select a correct operator");
}
import inquirer from "inquirer";
console.log("3rd Project ATM Develope by HIRA BAQAR");
const userInput = await inquirer.prompt([
    {
        type: "string",
        name: "userID",
        message: "Enter Yor ID"
    },
    {
        type: "number",
        name: "userPin",
        message: "Enter Yor Pincode"
    },
    {
        type: "list",
        name: "AccountType",
        choices: ['current', 'saving'],
        message: "select Account Type: "
    },
    {
        type: "list",
        name: "TransactionType",
        choices: ['Cash Withdrawl', 'fast cash', 'Balance Inqiury'],
        message: "select transaction type",
    },
    {
        type: "list",
        name: "Amount",
        message: "Enter your Amount?",
        choices: [`10000','15000','20000','other`],
        when(userInput) {
            return userInput.transactionType === "fast cash";
        }
    },
    {
        type: "list",
        name: "Amount",
        message: "Enter your Amount?",
        choices: ['10000', '15000', '20000', "other"],
        when(userInput) {
            return userInput.transactionType === "cash withdrawl";
        }
    },
    {
        type: "input",
        name: "Amount",
        message: "balance inquiry?",
        when(userInput) {
            return userInput.transactionType === "balance inquiry";
        }
    }
]);
const enteredAmount = userInput.Amount;
// console.log(userInput)
const balance = Math.floor(Math.random() * 200000);
if (userInput.userID && userInput.userPin) {
    console.log(balance);
    const enteredAmount = userInput.Amount;
}
if (balance >= enteredAmount) {
    const Remaining = balance - enteredAmount;
    console.log("Your remaining balance is", Remaining);
}
else if (balance != enteredAmount) {
    console.log("Insuficent Balance");
}


import inquirer from "inquirer"

console.log("3rd Project ATM Develope by HIRA BAQAR")


interface transnum{
      userID:string,
       userPin:number,
       AccountType:string,
       Amount:number,
       TransactionType:string|any
    }

    const userInput:transnum =  await inquirer.prompt([
        {
                type: "string",
                name: "userID",
                message:"Enter Your ID"
            },
            {
                type: "number",
                name: "userPin",
                message:"Enter Your Pincode"
            },
            {
                type:"list",
                name:"AccountType",
                choices:['current','saving'],
                message:"select Account Type: "
            },
            {
                type:"list",
                name:"TransactionType",
                choices:['Cash Withdrawl','fast cash','Balance Inqiury'],
                message:"select transaction type",
            },
            {
                 type:"list",
                name:"Amount",
                message:"Enter your Amount?",
                choices:[`10000','15000','20000','other`],
                when(userInput): boolean{
                  return userInput.transactionType === "fast cash";
                 }
            } ,   
            {
                type:"list",
                name:"Amount",
                message:"Enter your Amount?",
                choices:['10000','15000','20000',"other"],
                 when(userInput):boolean{
                 return userInput.transactionType ==="cash withdrawl";
             }   
            } ,
            {
                type:"input",
                name:"Amount",
                message:"balance inquiry?",
                when(userInput){
                 return userInput.transactionType ==="balance inquiry";
             }   
            }   
        ]);
        const enteredAmount= userInput.Amount;
        // console.log(userInput)
        const balance = Math.floor(Math.random()*200000);

        if(userInput.userID && userInput.userPin){
              console.log(balance)
            const enteredAmount= userInput.Amount;
        }if (balance >= enteredAmount){
            const  Remaining = balance - enteredAmount;
            console.log("Your remaining balance is",Remaining);
        }else if(balance!= enteredAmount){
            console.log("Insuficent Balance");
        }

       
// interface Atm {
//   userid: string;
//   userpin: number;
//   accounttype: string;
//   transationtype: string;
//   amount: number;
// }

// let atmInput:Atm = await inquirer.prompt([
// //   // We will collect the user's ID
//   { type: "input", name: "userid", message: "enter your userid" },

//    { type: "number", name: "userpin", message: "enter your userpin" },

// //   //   We will collect the user's account type
//    {
//     type: "list",
//     name: "accounttype",
//     message: "enter your accounttype",
//     choices: ["current", "saving"],
//   },

// //   //   We will collect the user's transationtype
//   {
//     type: "list",
//     name: "transationtype",
//     message: "enter your transation type",
//     choices: ["withdraw", "fastcash", "current balance"],
//   },

// //   // We will ask the user for the amount they want to withdraw.
//   {
//     type: "number",
//     name: "amount",
//     message: "Enter your amount",
//     when(atmInput) {
//       return atmInput.transationtype === "withdraw";
//     },
//   },
//   {
//     type: "list",
//     name: "amount",
//     choices: [10000, 20000, 30000, 40000, 50000],
//     message: "Enter your amount",
//     when(atmInput) {
//       return atmInput.transationtype === "fastcash";
//     },
//   },
// ]);

// // The user's data is stored in a variable for ease of access if needed in the code.
// const username = atmInput.userid;
// const userpin = atmInput.userpin;
// const userAmount = atmInput.amount;

// // Here, we will use an "if" condition to display the user's balance.
// if (username && userpin && atmInput.transationtype === "current balance") {
//   let yourBalance = Math.floor(Math.random() * 10000000);
//   console.log(`Your account balance is ${yourBalance} \n`);
// }

// // Here, we will deduct the amount from the user that they want to withdraw, and we will inform them of their remaining balance
// else if (username && userpin) {
//   let yourBalance2 = Math.floor(Math.random() * 10000000);
//   if (yourBalance2 > userAmount) {
//     console.log(
//       `You have withdrawn ${userAmount}, and your remaining account balance is RS ${
//         yourBalance2 - userAmount
//       }`
//     );

//     // Here, we will inform them whether there is a shortage of funds in their account or not
//   } else {
//     console.log(`\n Oops, there is no money in your account`);
//   }
// }






      
            
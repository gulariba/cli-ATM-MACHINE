import inquirer from "inquirer";

//initialiing user balance and pin code//
let myBalance = 5000;
let myPin = 1234;

//printing welcome messege//
console.log("Welcome to Code With Areeba - ATM Machine ");

let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter your pin code:"
    }
])
if(pinAnswer.pin === myPin){
    console.log("pin is correct , Login successfully!");
    //console.log('Current Acount Balance is ${myBalance}');

    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "select an operation:",
            choices: ["Withdraw Amount" , "Check Balance"]
        }
    ])

    if(operationAns.operation === "Withdraw Amount"){
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Enter the amount to withdraw:",
            }
        ])
        if(amountAns.amount > myBalance){
            console.log("Insufficient Balance");
        }
        else{
            myBalance -= amountAns.amount;
            console.log(`${amountAns.amount} Withdraw Succesfully`);
            console.log(`your Remaining balance is: ${myBalance}`);
        }
    }
    else if(operationAns.operation === "Check Balance"){
        console.log(`Your Account Balance is: ${myBalance}`);
    }
}
else {
    console.log("Pin is Incorrect, Try Again!");
}
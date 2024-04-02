#! /usr/bin/env node
import inquirer from "inquirer"

let myBalance = 10000 //dollars
let myPin = 1234;
let pinAnswer = await inquirer.prompt(
    [
        {name: "pin",
        message:"Enter pin 1234",
        type:"number"
        }
    ]  
    );
    if (pinAnswer.pin === myPin){
    console.log("Correct pin code!!!");
    
    let operationAns = await inquirer.prompt(
        [
            {name:"options",
            message:"Please select options",
            type:"list",
            choices:["withdraw","check balance","fastcash"]

            }
]
);
            if (operationAns.options === "withdraw"){
                let amountAns = await inquirer.prompt([{
                    name:"amount",
                    message:"Enter your amount",
                    type:"number"
                }]);
                if(myBalance >= amountAns.amount){
                myBalance -= amountAns.amount;
                console.log(`Your remaining balance is: ${myBalance}`)
                }else if (myBalance <= amountAns.amount){
                    console.log("insufficient balance")
                }
                
            }else if(operationAns.options === "check balance"){
                console.log(`Your balance is: ${myBalance}`);
            }else if(operationAns.options === "fastcash"){
                let selectAmount = await inquirer.prompt([{
                    name:"fast",
                    message:"select fast amount",
                    type:"list",
                    choices: [1000,2000,5000,10000]
                }])
                if (selectAmount.fast === 1000){
        
                    myBalance -= selectAmount.fast
                console.log(`Your remaining balance is:  ${myBalance}`);
                }else if (selectAmount.fast === 2000){
                    myBalance -= selectAmount.fast
                    console.log(`Your remaining balance is: ${myBalance}`);
                }else if (selectAmount.fast === 5000){
                    myBalance -= selectAmount.fast
                console.log(`Your remaining balance is: ${myBalance}`);          
                 }else if (selectAmount.fast === 10000){
                    myBalance -= selectAmount.fast
                    console.log(`Your balance is: ${myBalance}`)
                 }
            }
    }else {
        console.log("incorrect Pin");
    }


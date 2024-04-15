import inquirer from "inquirer";
const Currency = {
    USD: 1, //base currency
    EUR: 0.91,
    GBP: 0.78,
    INR: 74.57,
    PKR: 280,
};
let user_Currency = await inquirer.prompt([
    {
        name: "from",
        message: "Enter from Currency",
        type: 'list',
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR']
    },
    {
        name: 'to',
        message: "Enter from Currency",
        type: 'list',
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR']
    },
    {
        name: "amount",
        message: "Enter Your Amount",
        type: "confirm",
    }
]);
let fromAmount = Currency[user_Currency.from];
let toAmount = Currency[user_Currency.to];
let amount = user_Currency.amount;
let baseAmount = amount / fromAmount; // USD base currency // 4
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);
console.log(fromAmount);
console.log(toAmount);
console.log(amount);

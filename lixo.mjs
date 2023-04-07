import { stdin as input, stdout as output } from "node:process";
import * as readline from "node:readline/promises";

const rl = readline.createInterface({ input, output });

const num1 = await rl.question("Primeiro numero ? ");
const num2 = await rl.question("Segundo numero ? ");

const soma = parseInt(num1) + parseInt(num2);
const mult = parseInt(num1) * parseInt(num2);

console.log(`Soma: ${soma}  -  Multiplicação: ${mult}`);

rl.close();

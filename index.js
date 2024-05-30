#! /usr/bin/env node
import inquirer from "inquirer";
// For Player 
class Player {
    name;
    health = 100;
    constructor(name) {
        this.name = name;
    }
    decreaseHealth() {
        let health = this.health - 20;
        this.health = health;
    }
    increaseHealth() {
        this.health = 100;
    }
}
// For enemy
class Enemy {
    name;
    health = 100;
    constructor(name) {
        this.name = name;
    }
    decreaseHealth() {
        let health = this.health - 20;
        this.health = health;
    }
}
// Player Object
let player = await inquirer.prompt([
    {
        name: "name",
        type: "input",
        message: "Enter Player Name:"
    }
]);
// Enemy Object
let enemy = await inquirer.prompt([
    {
        name: "select",
        type: "list",
        message: "Select the Enemy you fight with:",
        choices: ["Skeleton", "Alien", "Zombie"]
    }
]);
let player1 = new Player(player.name);
let enemy1 = new Enemy(enemy.select);
console.log(`${player.name} v/s ${enemy.select}`);
do {
    // For Skeleton
    if (enemy.select == "Skeleton") {
        let ask = await inquirer.prompt([
            {
                name: "Opt",
                type: "list",
                message: "What would you like to do?",
                choices: ["Attack", "Drink Portion", "Run.."]
            }
        ]);
        if (ask.Opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                player1.decreaseHealth();
                console.log(`${player1.name} Health is: ${player1.health}`);
                console.log(`${enemy1.name} Health is: ${enemy1.health}`);
                if (player1.health <= 0) {
                    console.log("You Loose! Better Luck Next Time");
                    process.exit();
                }
            }
            if (num <= 0) {
                enemy1.decreaseHealth();
                console.log(`${player1.name} Health is: ${player1.health}`);
                console.log(`${enemy1.name} Health is: ${enemy1.health}`);
                if (enemy1.health <= 0) {
                    console.log("Congratulation! You Win");
                    process.exit();
                }
            }
        }
        if (ask.Opt == "Drink Portion") {
            player1.increaseHealth();
            console.log(`Drink Portion Your Health is ${player1.health}`);
        }
        if (ask.Opt == "Run..") {
            console.log("You Loose! Better Luck Next Time");
            process.exit();
        }
    }
    // For Alien
    if (enemy.select == "Alien") {
        let ask = await inquirer.prompt([
            {
                name: "Opt",
                type: "list",
                message: "What would you like to do?",
                choices: ["Attack", "Drink Portion", "Run.."]
            }
        ]);
        if (ask.Opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                player1.decreaseHealth();
                console.log(`${player1.name} Health is: ${player1.health}`);
                console.log(`${enemy1.name} Health is: ${enemy1.health}`);
                if (player1.health <= 0) {
                    console.log("You Loose! Better Luck Next Time");
                    process.exit();
                }
            }
            if (num <= 0) {
                enemy1.decreaseHealth();
                console.log(`${player1.name} Health is: ${player1.health}`);
                console.log(`${enemy1.name} Health is: ${enemy1.health}`);
                if (enemy1.health <= 0) {
                    console.log("Congratulation! You Win");
                    process.exit();
                }
            }
        }
        if (ask.Opt == "Drink Portion") {
            player1.increaseHealth();
            console.log(`Drink Portion Your Health is ${player1.health}`);
        }
        if (ask.Opt == "Run..") {
            console.log("You Loose! Better Luck Next Time");
            process.exit();
        }
    }
    // For Zombie
    if (enemy.select == "Zombie") {
        let ask = await inquirer.prompt([
            {
                name: "Opt",
                type: "list",
                message: "What would you like to do?",
                choices: ["Attack", "Drink Portion", "Run.."]
            }
        ]);
        if (ask.Opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                player1.decreaseHealth();
                console.log(`${player1.name} Health is: ${player1.health}`);
                console.log(`${enemy1.name} Health is: ${enemy1.health}`);
                if (player1.health <= 0) {
                    console.log("You Loose! Better Luck Next Time");
                    process.exit();
                }
            }
            if (num <= 0) {
                enemy1.decreaseHealth();
                console.log(`${player1.name} Health is: ${player1.health}`);
                console.log(`${enemy1.name} Health is: ${enemy1.health}`);
                if (enemy1.health <= 0) {
                    console.log("Congratulation! You Win");
                    process.exit();
                }
            }
        }
        if (ask.Opt == "Drink Portion") {
            player1.increaseHealth();
            console.log(`Drink Portion Your Health is ${player1.health}`);
        }
        if (ask.Opt == "Run..") {
            console.log("You Loose! Better Luck Next Time");
            process.exit();
        }
    }
} while (true);

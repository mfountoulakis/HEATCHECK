#!/usr/bin/env node

import chalk from "chalk"
import clear from "clear"
import CLI from "clui"
import figlet from "figlet"
import fetch from 'node-fetch'
import GoogleImages from 'google-images'
import imageToAscii from "image-to-ascii"
import inquirer from "inquirer"
import NBA from "nba"
import Preferences from "preferences"
import program from "commander"
import Table from "cli-table2"

//utils
import getLeaders from './utils/getLeaders'
import getLeaderImageURl from "./utils/getLeaderImageUrl"

//variables
const ctx = new chalk.constructor({ level: 3 });
const prefs = new Preferences("heatcheck")
const Spinner = CLI.Spinner

console.log(
    ctx.bold.yellowBright.bgRed(        
        figlet.textSync("Heat Check!",
            process.env,
            {
                font: 'Big Money-ne',
                horizontalLayout: "full",
            }
        )
    )
)

program
    .command('stat')
    .alias('s')
    .option('-p, --points', 'points leaders')
    .option('-b, --blocks', 'blocks leaders')
    .option('-a, --assists', 'assists leaders')
    .option('-s, --steals', 'steals leaders')
    .action(function (option) {
        switch (true) {
            case option.points:
                var answer = "PTS"
                break
            case option.blocks:
                var answer = "BLK"
                break
            case option.assists:
                var answer = "AST"
                break
            case option.steals:
                var answer = "STL"
                break
            case option.turnovers:
                var answer = "TOV"
                break
            default:
                console.log("Sorry, nothing yet for " + answer + ".")
        }
        getLeaders(answer)
    });

program.parse(process.argv);





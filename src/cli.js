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

const ctx = new chalk.constructor({ level: 3 });
const Spinner = CLI.Spinner

console.log(
    ctx.bold.yellowBright.bgRed(
        figlet.textSync("Heat Check!",
            {
                font: 'Big Money-ne',
                horizontalLayout: "full",

            }
        )
    )
)
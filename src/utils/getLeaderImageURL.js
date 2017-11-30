import chalk from 'chalk'
import dotenv from "dotenv"
import GoogleImages from 'google-images'
import playerNames from '../helpers/playerNames'
import Player from '../helpers/player'

dotenv.config()

const client = new GoogleImages(process.env.SEARCH_ID, process.env.SEARCH_API_KEY);

const getLeaderImageURl = async (playerName, playerRank, teamName) => {
    try {
        await client.search(playerName, { size: 'large' })
            .then(images => {
                playerNames.push(new Player(playerName, images[0].url, playerRank, teamName))
            })
    } catch (e) {
        console.log(
            chalk.redBright(
                "Sorry, there was an error ", e
            )
        )

    }
}

export default getLeaderImageURl


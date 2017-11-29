import chalk from 'chalk'
import GoogleImages from 'google-images'
import playerNames from '../helpers/playerNames'
import Player from '../helpers/player'

const getLeaderImageURl = async (playerName, playerRank) => {
    try {
        await client.search(playerName, { size: 'large' })
            .then(images => {
                playerNames.push(new Player(playerName, images[0].url, playerRank))
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


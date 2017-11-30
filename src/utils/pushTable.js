import chalk from "chalk"
import playerNames from '../helpers/playerNames'
import imageToAscii from "image-to-ascii"
import imageOptions from '../helpers/imageOptions'
import Table from "cli-table2"
import statsTable from "../helpers/statsTable"

const pushTable = async (playerImage) => {
    try {
        await playerNames.forEach((player) => {
            imageToAscii(`${player.image_url}`, imageOptions, (err, converted) => {
                const playerImage = converted
                statsTable.push(
                    [{ rowSpan: 4, content: playerImage }],
                      ['name', player.name]
                    , ['rank', player.playerRank]
                    , ['team', player.teamName]
                );
            });
        });

    } catch (e) {
        console.log("there was an error", e)
    }


}

export default pushTable
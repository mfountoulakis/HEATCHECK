import chalk from "chalk"
import playerNames from '../helpers/playerNames'
import imageToAscii from "image-to-ascii"
import imageOptions from '../helpers/imageOptions'
import Table from "cli-table2"

var statsTable = new Table({
    head: ["Player"]

});

const pushTable = async (playerImage) => {
    try {
        await playerNames.forEach((player) => {
            imageToAscii(`${player.image_url}`, imageOptions, (err, converted) => {
                const playerImage = converted
                statsTable.push(
                    [{ colSpan: 2, content: playerImage }]
                    , ['rank', player.playerRank]
                );
                console.log(statsTable.toString())

            });
        });

    } catch (e) {
        console.log("there was an error", e)
    }
}

export default pushTable
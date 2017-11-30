import NBA from "nba"
import buildTableHeaders from "./buildTableHeaders"
import chalk from "chalk"
import getLeaderImageURl from "./getLeaderImageURL"
import playerNames from '../helpers/playerNames'
import pushTable from './pushTable'

import CLI from "clui"
var Spinner = new CLI.Spinner('fetching data...');


const getLeaders = async (answer) => {
    try {
        Spinner.start();
        const leagueLeaders = await NBA.stats.leagueLeaders({
            StatCategory: `${answer}`,
            Season: "2017-18",
            SeasonType: "Regular Season",
            ActiveFlag: true
        })

        buildTableHeaders(leagueLeaders.resultSet.headers)

        leagueLeaders.resultSet.rowSet.slice(0, 15).forEach((element) => {
            const playerRank = element[1]
            const playerName = element[2]
            const teamName = element[3]
            getLeaderImageURl(playerName, playerRank, teamName).then(() => {
                Spinner.stop();
                if (playerNames.length == '15') {
                    pushTable();
                }
            })
        })
    } catch (e) {
        console.log(
            chalk.redBright(
                "Sorry, there was an error ", e
            )
        );
    }

}
export default getLeaders


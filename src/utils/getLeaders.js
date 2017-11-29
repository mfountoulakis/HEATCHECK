import NBA from "nba"
import chalk from "chalk"
import getLeaderImageURl from "./getLeaderImageURL"
import playerNames from '../helpers/playerNames'
import pushTable from './pushTable'


const getLeaders = async (answer) => {
    try {
        const leagueLeaders = await NBA.stats.leagueLeaders({
            PerMode: "PerGame",
            StatCategory: `${answer}`,
            Season: "2017-18",
            SeasonType: "Regular Season",
            ActiveFlag: true
        })
        leagueLeaders.resultSet.rowSet.slice(0, 15).forEach((element) => {
            const playerRank = element[1]
            const playerName = element[2]
            getLeaderImageURl(playerName, playerRank).then((l) => {
                pushTable()
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


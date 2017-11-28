import NBA from "nba"
import chalk from "chalk"
import getLeaderImageURl from "./getLeaderImageURL"

const getLeaders = async (answer) => {
    try {
        const leagueLeaders = await NBA.stats.leagueLeaders({
            PerMode: "PerGame",
            StatCategory: `${answer}`,
            Season: "2017-18",
            SeasonType: "Regular Season",
            ActiveFlag: true
        })
        //move this someplace else
        leagueLeaders.resultSet.rowSet.slice(0, 15).forEach((element) => {
            const playerRank = element[1]
            const playerName = element[2]
            getLeaderImageURl(playerName, playerRank).then(() => {
                pushPlayer()
            });
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


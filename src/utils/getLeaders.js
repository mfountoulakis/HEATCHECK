import NBA from "nba"
import chalk from "chalk"

const getLeaders = async (answer) => {
    try {
        const leagueLeaders = await NBA.stats.leagueLeaders({
            PerMode: "PerGame",
            StatCategory: `${answer}`,
            Season: "2017-18",
            SeasonType: "Regular Season",
            ActiveFlag: true
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
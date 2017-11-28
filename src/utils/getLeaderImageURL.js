import GoogleImages from 'google-images'

const client = new GoogleImages('013987659345103135712:ngnkzqbnh_m', 'AIzaSyAoW2B5Xi6zKIxRJHWo2GzgaCuHv-4AzTE');

const getLeaderImageURl = async (playerName, playerRank) => {
    try {
        await client.search(playerName, { size: 'small' })
            .then(images => {
                playerNames.push(new Player(playerName, images[0].url, playerRank))
            })
    } catch (e) {
        console.log("ERRORRRR ", e); // 30
    }
}

export default getLeaderImageURl
import axios from 'axios'

export const jikanApi = async (offset = 0, take = 25) => {
    const { data } = await axios.get(`https://api.jikan.moe/v4/anime`)
    const animeList = data.data.splice(offset, take)
    return animeList
}
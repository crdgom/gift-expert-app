export const getGifs = async(category) => {
    const apiKey = 'iJJ2vzkQFv0JqxZJSzhOuD9zKE5m2er3'
    const query = category
    const rate = 'r'
    const limit = '10'
    const offset = '5'
    const getUrl = `https://api.giphy.com/v1/gifs/search?q=${encodeURI (query)}&rating=${rate}&limit=${limit}&offset=${offset}&api_key=${apiKey}`
    const response = await fetch (getUrl);
    const {data} = await response.json();

    const gifs = data.map(img => {
        return{
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    } )

    return gifs;
}
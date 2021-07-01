export default {
    GIPHY: {
      GET_TRENDING: {
        URL: (apiKey: string, limit: number, offset: number) => `/v1/gifs/trending?api_key=${apiKey}&limit=${limit}&offset=${offset}`,
        METHOD: 'GET'
      },
      SEARCh_TRENDING: {
        URL: (apiKey: string, query: string, limit: number, offset: number) => `/v1/gifs/search?api_key=${apiKey}&q=${query}&limit=${limit}&offset=${offset}`,
        METHOD: 'GET'
      }
    }
};

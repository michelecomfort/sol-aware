const apiCalls = {

    getCityState: (zip) => {
        return fetch(`https://ziptasticapi.com/${zip}`)
            .then(res => res.json())
                
    },

    getUvData: (zip) => {
        return fetch(`https://s3.amazonaws.com/dmap-api-cache-ncc-production/20220113/hourly/zip/${zip}.json`)
            .then(res => res.json())
                
    }
}
export default apiCalls
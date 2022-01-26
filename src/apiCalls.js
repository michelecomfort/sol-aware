const getTodayDate = () => {
    const today = new Date()
    let yyyy = today.getFullYear()
    let mm = today.getMonth() + 1
    let dd = today.getDate()
    
    if(dd < 10) {
        dd = `0${dd}`
    } 
    if(mm < 10) {
        mm = `0${mm}`
    }
    return `${yyyy}${mm}${dd}`
}

const apiCalls = {

    getCityState: (zip) => {
        return fetch(`https://ziptasticapi.com/${zip}`)
            .then(res => {
                if(res.ok) {
                    return res.json()
                } else {
                    return {error: "Zip Code not found!"}
                }
            }).catch(err => err)
        },

    getUvData: (zip) => {
        return fetch(`https://s3.amazonaws.com/dmap-api-cache-ncc-production/${getTodayDate()}/hourly/zip/${zip}.json`)
        .then(res => {
            if(res.ok) {
                return res.json()
            } else {
                return {error: "Zip Code not found!"}
            }
        }).catch(err => err)         
    }
}

export default apiCalls
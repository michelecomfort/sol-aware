const uvCalculations = {

    findHighUv:(data) => {
        return data.map(obj => {
            return obj['UV_VALUE']
        }).sort((a, b) => {
            return b - a
        })
    },

    getUvStatus: () => {
        if(this.state.uvHigh <= 2) {
            return 'Low'
        } else if (2 < this.state.uvHigh <= 5 ) {
            return 'Moderate'
        } else if (5 < this.state.uvHigh <= 7) {
            return 'High'
        } else if (7 < this.state.uvHigh <= 10) {
            return 'Very High'
        } else if (this.state.uvHigh > 10) {
            return 'Extreme'
        }
    },

    grabExposureMinutes:(skinType) => {
        let type;
        switch(skinType) {
            case 'Type I':
                type = 2.5
                break;
            case 'Type II':
                type = 3
                break;
            case 'Type III':
                type = 4
                break;
            case 'Type IV':
                type = 5
                break;
            case 'Type V':
                type = 8
                break;
            case 'Type VI':
                type = 15
                break;
        }
        this.setState({ exposureMinutes: `Your maximum safe exposure time is ${Math.floor((200 * type) / (3 * this.state.uvHigh))} minutes.` })
    }
}


export default uvCalculations
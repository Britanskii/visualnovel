


const getIntervalTimeBySymbol = (symbol: string) => {

    switch (symbol) {
        case ".":
        case "!":
            return 150
        case ",": return 100
        default: return 10
    }
}

export default getIntervalTimeBySymbol
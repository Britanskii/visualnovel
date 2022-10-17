import StoreSettings from "../mobX/stores/StoreSettings";
import {textSpeedState} from "../interfaces/enums";


const getIntervalTimeBySymbol = (symbol: string) => {
    const state = StoreSettings.getTextSpeedState()

    if (StoreSettings.getIsPunctuationMode()) {
        if (state === textSpeedState.SLOW) {
            switch (symbol) {
                case ".":
                case "!":
                    return 300
                case ",": return 50
                default: return 20
            }
        } else if (state === textSpeedState.MEDIUM) {
            switch (symbol) {
                case ".":
                case "!":
                    return 150
                case ",": return 100
                default: return 10
            }
        } else if (state === textSpeedState.FAST) {
            switch (symbol) {
                case ".":
                case "!":
                    return 75
                case ",": return 50
                default: return 5
            }
        }
    } else {
        switch (StoreSettings.getTextSpeedState()) {
            case textSpeedState.SLOW: return 20
            case textSpeedState.MEDIUM: return 10
            case textSpeedState.FAST: return 5
        }
    }
}

export default getIntervalTimeBySymbol
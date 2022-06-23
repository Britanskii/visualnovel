import {makeAutoObservable} from "mobx";
import {textSpeedState} from "../../interfaces/enums";


class StoreSettings {

    protected  _textSpeedState: textSpeedState = textSpeedState.MEDIUM
    protected  _isPunctuationMode: boolean = true
    protected  _isFullscreen: boolean = false

    constructor() {
        makeAutoObservable(this)
    }

    getTextSpeed = () => {
        switch (this._textSpeedState) {
            case textSpeedState.SLOW: return 100
            case textSpeedState.MEDIUM: return 50
            case textSpeedState.FAST: return 10
            default:
                console.error("Wrong speed state")
        }
    }


    setTextSpeedState = (textSpeedState: textSpeedState) => {
        this._textSpeedState = textSpeedState
    }

    getTextSpeedState = () => this._textSpeedState

    toggleIsPunctuationMode = () => {
        this._isPunctuationMode = !this._isPunctuationMode
    }

    getIsPunctuationMode = () => this._isPunctuationMode

    toggleIsFullscreen = () => {
        this._isFullscreen = !this._isFullscreen
    }

    getIsFullscreen = () => this._isFullscreen

}

export default new StoreSettings()
import {makeAutoObservable} from "mobx";
import {textSpeedState} from "../../interfaces/enums";
import {FullScreenHandle} from "react-full-screen";


class StoreSettings {

    protected _textSpeedState: textSpeedState = textSpeedState.MEDIUM
    protected _isPunctuationMode: boolean = true
    protected _isFullscreen: boolean = false
    protected _fullscreenHandle!: FullScreenHandle
    protected _momentPrinting: boolean = false

    constructor() {
        makeAutoObservable(this)
    }

    getTextSpeed = () => {
        switch (this._textSpeedState) {
            case textSpeedState.SLOW:
                return 100
            case textSpeedState.MEDIUM:
                return 50
            case textSpeedState.FAST:
                return 10
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
        this._isFullscreen ? this._fullscreenHandle.enter() : this._fullscreenHandle.exit()
     }

    getIsFullscreen = () => this._isFullscreen

    toggleMomentPrinting = () => {
        this._momentPrinting = !this._momentPrinting
    }

    setMomentPrinting = (momentPrinting: boolean) => {
        this._momentPrinting = momentPrinting
    }

    getMomentPrinting = () => this._momentPrinting

    setFullscreenHandle = (handle: FullScreenHandle) => {
        this._fullscreenHandle = handle
    }

    getFullscreenHandle = () => this._fullscreenHandle

}

export default new StoreSettings()
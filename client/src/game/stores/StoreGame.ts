import {makeAutoObservable} from "mobx";
import {stateGame, stateLoad} from "../interfaces/enums";

class StoreGame {

    protected  _parallax: boolean = true
    protected _stateGame: stateGame = stateGame.MENU
    protected _imagesLoad: stateLoad = stateLoad.INITIAL

    constructor() {
        makeAutoObservable(this)
    }

    getStateGame = (): stateGame => this._stateGame


    setStateGame(stateGame: stateGame) {
        this._stateGame = stateGame
    }

    getParallaxState = (): boolean => this._parallax

    setParallaxState(parallax: boolean) {
        this._parallax = parallax
    }

    getImagesLoad = () => this._imagesLoad

    setImagesLoad = (state: stateLoad) => {
        this._imagesLoad = state
    }
}

export default new StoreGame()
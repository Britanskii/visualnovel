import {makeAutoObservable} from "mobx";
import {game, load} from "../../interfaces/enums";

class StoreGame {

    protected  _parallax: boolean = true
    protected _stateGame: game = game.MENU
    protected _imagesLoad: load = load.INITIAL

    constructor() {
        makeAutoObservable(this)
    }

    getStateGame = (): game => this._stateGame


    setStateGame(stateGame: game) {
        this._stateGame = stateGame
    }

    getParallaxState = (): boolean => this._parallax

    setParallaxState(parallax: boolean) {
        this._parallax = parallax
    }

    getImagesLoad = () => this._imagesLoad

    setImagesLoad = (state: load) => {
        this._imagesLoad = state
    }
}

export default new StoreGame()
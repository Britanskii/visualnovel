import {makeAutoObservable, observable} from "mobx";
import {stateGame} from "../interfaces/enums";

class StoreGame {

    protected  _parallax: boolean = true
    protected _stateGame: stateGame = stateGame.MENU

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
}

export default new StoreGame()
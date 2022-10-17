import {legend, storyI} from "../interfaces/interfaces";
import parseImagesEnum from "./parseImagesEnum";


const toStory = (legend: () => legend[], background?: object): () => storyI => {

    const backgrounds = !!background ? parseImagesEnum(background) : []

    return (): storyI => {
        return {backgrounds, legend: legend()}
    }
}

export default toStory
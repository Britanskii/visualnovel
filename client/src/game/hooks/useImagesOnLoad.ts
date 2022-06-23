import {useEffect} from "react";
import {stateLoad} from "../interfaces/enums";
import parseImagesEnum from "../functions/parseImagesEnum";
import StoreGame from "../mobX/stores/StoreGame";


const useImagesOnLoad = (paths: string[]) => {

    const {setImagesLoad} = StoreGame

    const loadImage = (path: string) =>
        new Promise((resolve, reject) => {
            const img = new Image()
            img.onload = () => resolve(path)
            img.onerror = () => reject()

            img.src = path
        })

    const allPromises = (paths: string[]) => {
        setImagesLoad(stateLoad.LOADING)
        return paths.map(path => loadImage(path))
    }

    useEffect(() => {
        const parsedPaths = parseImagesEnum(paths)

        Promise.all(allPromises(parsedPaths)).then((message) => {
            // console.log(message);
            setImagesLoad(stateLoad.COMPLETE)
        }, reason => {
            // console.log(reason)
            setImagesLoad(stateLoad.ERROR)
        })
    }, [paths])
}

export default useImagesOnLoad
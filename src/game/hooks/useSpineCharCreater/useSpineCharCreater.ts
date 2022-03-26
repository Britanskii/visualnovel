import data from "../../../data/spineCharacters"
import {useEffect} from "react"
import {
    AnimationState,
    AnimationStateData,
    AssetManager,
    AtlasAttachmentLoader,
    Skeleton,
    SkeletonJson,
    SkeletonRenderer
} from "@esotericsoftware/spine-canvas"

// import 'animate.css'


const useSpineCharCreater =  (char: string, animation: string) => {

    const character: rawSpineChar = data[char]

    const canvas: HTMLCanvasElement = document.createElement("canvas")
    canvas.style.width = "350px"
    canvas.style.height = "100%"

    let animationState: any

    const context = canvas.getContext("2d")

    // @ts-ignore
    useEffect(async () => {
        let lastFrameTime = Date.now() / 1000

        const skeletonRenderer = new SkeletonRenderer(context!)


        const assetManager = new AssetManager(character.res.prefix)
        assetManager.loadText(character.res.json)


        assetManager.loadTextureAtlas(character.res.atlas)
        await assetManager.loadAll()


        let atlas = assetManager.require(character.res.atlas)
        let atlasLoader = new AtlasAttachmentLoader(atlas)
        let skeletonJson = new SkeletonJson(atlasLoader)
        let skeletonData = skeletonJson.readSkeletonData(assetManager.require("spineboy-ess.json"))

        const skeleton = new Skeleton(skeletonData)
        skeleton.setToSetupPose()
        skeleton.updateWorldTransform()
        const bounds = skeleton.getBoundsRect()

        const animationStateData = new AnimationStateData(skeleton.data)
        animationStateData.defaultMix = 0.2
        animationState = new AnimationState(animationStateData)

        animationState.setAnimation(0, animation, true)


        requestAnimationFrame(render)

        document.getElementById("front")!.appendChild(canvas)

        function render() {
            // Calculate the delta time between this and the last frame in seconds.
            const now = Date.now() / 1000
            const delta = now - lastFrameTime
            lastFrameTime = now

            // Resize the canvas drawing buffer if the canvas CSS width and height changed
            // and clear the canvas.
            if (canvas.width != canvas.clientWidth || canvas.height != canvas.clientHeight) {
                canvas.width = canvas.clientWidth
                canvas.height = canvas.clientHeight
            }
            context!.clearRect(0, 0, canvas.width, canvas.height)

            // Center the skeleton and resize it so it fits inside the canvas.
            skeleton.x = canvas.width / 2
            skeleton.y = canvas.height
            let scale = canvas.height / bounds.height * 0.8
            skeleton.scaleX = scale
            skeleton.scaleY = -scale

            // Update and apply the animation state, update the skeleton's
            // world transforms and render the skeleton.
            // Update and apply the animation state, update the skeleton's
            // world transforms and render the skeleton.
            animationState.update(delta)
            animationState.apply(skeleton)
            skeleton.updateWorldTransform()
            skeletonRenderer.draw(skeleton)

            requestAnimationFrame(render)
        }


    }, [])

    const jump = () => {
        animationState.setAnimation(0, "jump", false)
    }

    return {animationState}

}

export default useSpineCharCreater
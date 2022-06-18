import data from "../../../data/spineCharacters"
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


const spineCharCreater = (char: string, animation: string) => {

    const character: rawSpineChar = data[char]

    //Canvas
    const canvas: HTMLCanvasElement = document.createElement("canvas")
    canvas.style.width = "350px"
    canvas.style.height = "100%"
    canvas.id = char

    const context = canvas.getContext("2d")

    let lastFrameTime = Date.now() / 1000

    const skeletonRenderer = new SkeletonRenderer(context!)

    const assetManager = new AssetManager()
    assetManager.loadText(require("../../forefront/assets/spineboy-ess.json"))
    assetManager.loadTextureAtlas(require("../../forefront/assets/spineboy-pma.atlas"))
    assetManager.loadTexture(require("../../forefront/assets/spineboy-pma.png"))
    // assetManager.loadAll()

    let atlas = assetManager.require(require("../../forefront/assets/spineboy-pma.atlas"))

    // const assetManager = new AssetManager(character.res.prefix)
    // assetManager.loadText(character.res.json)
    //
    // assetManager.loadTextureAtlas(character.res.atlas)
    // assetManager.loadAll()
    //
    // let atlas = assetManager.require(character.res.atlas)

    let atlasLoader = new AtlasAttachmentLoader(atlas)
    let skeletonJson = new SkeletonJson(atlasLoader)
    let skeletonData = skeletonJson.readSkeletonData(assetManager.require("spineboy-ess.json"))

    const skeleton = new Skeleton(skeletonData)
    skeleton.setToSetupPose()
    skeleton.updateWorldTransform()
    const bounds = skeleton.getBoundsRect()

    const animationStateData = new AnimationStateData(skeleton.data)
    animationStateData.defaultMix = 0.2
    const animationState = new AnimationState(animationStateData)

    animationState.setAnimation(0, animation, true)

    // requestAnimationFrame(render)

    function render() {
        const now = Date.now() / 1000
        const delta = now - lastFrameTime
        lastFrameTime = now

        if (canvas.width != canvas.clientWidth || canvas.height != canvas.clientHeight) {
            canvas.width = canvas.clientWidth
            canvas.height = canvas.clientHeight
        }
        context!.clearRect(0, 0, canvas.width, canvas.height)

        skeleton.x = canvas.width / 2
        skeleton.y = canvas.height
        let scale = canvas.height / bounds.height * 0.8
        skeleton.scaleX = scale
        skeleton.scaleY = -scale

        animationState.update(delta)
        animationState.apply(skeleton)
        skeleton.updateWorldTransform()
        skeletonRenderer.draw(skeleton)

        requestAnimationFrame(render)
    }

    const create = () => {
        if (!document.getElementById(char)) {
            document.getElementById("front")!.appendChild(canvas)
        }
    }

    const jump = () => {
        animationState.setAnimation(0, "jump", false)
        animationState.addAnimation(0, "run", true);
    }

    return {
        create,
        jump
    }

}

export default spineCharCreater
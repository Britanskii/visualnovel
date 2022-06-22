let handlerCallback: (arg0: { direction: string; version: string; angle: number; }) => any
let useOrientation: boolean

function setUseOrientation () {
    useOrientation = true
}

function setUseWindowSize () {
    useOrientation = false
}

function getScreenOrientation (orientationEvent: { type: string; angle: number } | undefined) {
    const orientation = orientationEvent !== undefined
        ? orientationEvent
        : getOrientation()

    const type = orientation.type
    const angle = orientation.angle

    const types = type.split('-')
    const direction = types[0]
    const version = types[1]

    return {
        direction: direction,
        version: version,
        angle: angle
    }
}

function addEventOnOrientationChange (callback: any) {
    handlerCallback = callback

    if (shouldUseOrientation()) {
        // @ts-ignore
        window.screen.orientation.addEventListener('change', handleOrientationChange, false)
    } else {
        window.addEventListener('resize', handleResize, false)
    }
}

function removeEventOnOrientationChange () {
    if (shouldUseOrientation()) {
        // @ts-ignore
        window.screen.orientation.removeEventListener('change', handleOrientationChange)
    } else {
        window.removeEventListener('resize', handleResize)
    }
}

function shouldUseOrientation () {
    if (useOrientation === true) {
        return true
    } else if (useOrientation === false) {
        return false
    }

    return (window.screen !== undefined && window.screen.orientation !== undefined)
}

function getOrientation () {
    return shouldUseOrientation()
        ? window.screen.orientation
        : detect(window)
}
//@ts-ignore
function detect (windowtarget) {
    const x = windowtarget.innerWidth
    const y = windowtarget.innerHeight

    return {
        type: x >= y ? 'landscape-primary' : 'portrait-primary',
        angle: 0
    }
}

function handleOrientationChange (event: { target: { type: string; angle: number; } | undefined; }) {
    return handlerCallback(getScreenOrientation(event.target))
}

function handleResize (event: { target: any; }) {
    return handlerCallback(getScreenOrientation(detect(event.target)))
}

const screenOrientationModule = () => getScreenOrientation(undefined)

// @ts-ignore
screenOrientationModule.setUseOrientation = setUseOrientation
// @ts-ignore
screenOrientationModule.setUseWindowSize = setUseWindowSize
// @ts-ignore
screenOrientationModule.getScreenOrientation = getScreenOrientation
// @ts-ignore
screenOrientationModule.addEventOnOrientationChange = addEventOnOrientationChange
// @ts-ignore
screenOrientationModule.removeEventOnOrientationChange = removeEventOnOrientationChange

export default screenOrientationModule
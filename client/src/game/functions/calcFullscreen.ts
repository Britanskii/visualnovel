
const calcFullscreen = () => {

    let width = window.innerWidth
    let height = width / 16 * 9

    if (height > window.innerHeight) {
        height = window.innerHeight
        width = height / 9 * 16
    }

    return  {width, height}
}

export default calcFullscreen
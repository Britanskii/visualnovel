

const parseImagesEnum = (enumObject: object): string[] => {
    const arrayImagesSrouce = []

    for (let key in enumObject) {
        // @ts-ignore
        const source = enumObject[key]
        if (source.includes("static")) {
            arrayImagesSrouce.push(source)
        }
    }

    return arrayImagesSrouce
}

export default parseImagesEnum
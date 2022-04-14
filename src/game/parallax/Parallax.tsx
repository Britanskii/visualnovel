import React, {DetailedReactHTMLElement, FC, useEffect, useState} from "react";

import s from "./parallax.module.sass"


const Parallax: FC = (props) => {
    const [parallaxItems, setParallaxItems] = useState<DetailedReactHTMLElement<any, HTMLElement>[]>([])

    useEffect(() => {
        const strength = 20
        const speed = .5

        let positionX = 0, positionY = 0
        let cordXprocent = 0, cordYprocent = 0

        const setMouseParallaxStyle = () => {
            const distX = cordXprocent - positionX
            const distY = cordYprocent - positionY

            positionX = positionX = (distX * speed)
            positionY = positionY = (distY * speed)

            const parallaxItems = React.Children.map(props.children, (child) => {
                // @ts-ignore
                return React.cloneElement(child, {
                    style: {
                        transform: `translate(${positionX / strength}%, ${positionY / strength}% )`
                    }
                })
            })

            if (parallaxItems !== undefined && parallaxItems !== null) {
                console.log('anime')
                setParallaxItems(parallaxItems)
            }

            // refStar1.current.style.transform = `translate(${positionX / strength}%, ${positionY / strength}% )`

            requestAnimationFrame(setMouseParallaxStyle)
        }

        setMouseParallaxStyle()

        document.addEventListener("mousemove", (e) => {
            const parallaxWidth = document.body.offsetWidth
            const parallaxHeight = document.body.offsetHeight

            const cordX = e.pageX - parallaxWidth / 2
            const cordY = e.pageY - parallaxHeight / 2

            cordXprocent = cordX / parallaxWidth * 100
            cordYprocent = cordY / parallaxHeight * 100
        })

    }, [])

    // console.log(props.children)

    return (
        <div className = {s.parallax}>
            {parallaxItems}
        </div>
    )
}

export default Parallax
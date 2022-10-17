import useGetAdaptive from "./useGetAdaptive";
import {useEffect, useState} from "react";
import {adaptive} from "../interfaces/enums";
import s from "../dialogbox/dialogbox.module.sass";


const useGetAdaptiveClass = (sass: object, clazz: string) => {
    const [classAdaptive, setClassAdaptive] = useState("")

    const adaptiveState: adaptive | undefined = useGetAdaptive()

    useEffect(() => {
        if (adaptiveState !== undefined) {
            switch (adaptiveState) {
                case adaptive.TWOK: // @ts-ignore
                    setClassAdaptive(sass[clazz + "__twok"]);
                    break
                case adaptive.FULLHD:
                    // @ts-ignore
                    setClassAdaptive(sass[clazz + "__fullhd"]);
                    break
                case adaptive.HD:
                    // @ts-ignore
                    setClassAdaptive(sass[clazz + "__hd"]);
                    break
                case adaptive.MOBILE:
                    // @ts-ignore
                    setClassAdaptive(sass[clazz + "__mobile"]);
                    break
            }
        }
    }, [adaptiveState])

    return classAdaptive
}

export default useGetAdaptiveClass
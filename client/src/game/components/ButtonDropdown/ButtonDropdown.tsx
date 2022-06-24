import s from "./buttonDropdown.module.sass"
import Button from "../button/Button";
import {textSpeedState} from "../../interfaces/enums";
import StoreSettings from "../../mobX/stores/StoreSettings";
import {useState} from "react";
import useGetAdaptiveClass from "../../hooks/useGetAdaptiveClass";
import {observer} from "mobx-react-lite";


const ButtonDropdown = observer(() => {

    const [isOpen, setIsOpen] = useState<boolean>(false)

    const classAdaptive = useGetAdaptiveClass(s, "buttonDropdown")

    const onToggle = () => {
        setIsOpen(isOpen => isOpen = !isOpen)
    }

    const arraySpeeds = [{name: "Медленно", state: textSpeedState.SLOW}, {name: "Умеренно", state: textSpeedState.MEDIUM}, {name: "Быстро", state: textSpeedState.FAST}, {name: "Мгновенно", state: textSpeedState.MOMENT}]

    const speeds = arraySpeeds.map(({name, state}) => {

        const active = state === StoreSettings.getTextSpeedState() || (state === textSpeedState.MOMENT && StoreSettings.getMomentPrinting()) ? s.buttonDropdown__speed_active : ""

        const setSpeedTextState = () => {
            StoreSettings.setTextSpeedState(state)

            if (state === textSpeedState.MOMENT) {
                StoreSettings.setMomentPrinting(true)
            } else {
                StoreSettings.setMomentPrinting(false)
            }
        }

        return (
            <div key={name} onClick={setSpeedTextState} className={`${s.buttonDropdown__speed} ${active}`}>
                {name}
            </div>
        )
    })

    return (
        <div className={`${s.buttonDropdown} ${classAdaptive}`}>
            <Button onClick={onToggle}>
                Скорость текста
            </Button>
            <div className={`${s.buttonDropdown__speeds} ${isOpen ? s.buttonDropdown__speeds_open : ""}`}>
                {speeds}
            </div>
        </div>
    )
})

export default ButtonDropdown
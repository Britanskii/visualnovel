import s from "./button.module.sass"
import useGetAdaptiveClass from "../../hooks/useGetAdaptiveClass";
import {ReactChild, ReactFragment, ReactPortal} from "react";

type ButtonProps = {
    children: ReactChild | ReactFragment | ReactPortal | boolean | null | undefined | string,
    onClick?: () => void
    className?: string,
    disabled?: boolean
    color: string
}

const Button = ({children, onClick, className, disabled, color}: ButtonProps) => {

    const classAdaptive = useGetAdaptiveClass(s, "button")

    return (
        <div onClick={onClick} className={`${s.button} ${disabled ? s.button_disabled : ""} ${classAdaptive} ${s["button__" + color]} ${className}`}>
            {children}
        </div>
    )
}

Button.defaultProps = {color: "menu"}

export default Button
import React, {FC} from "react";

import s from './border.module.sass'
import {observer} from "mobx-react-lite";
import border from '../../res/menu/main.jpg'

const Border: FC = observer(() => {

    return (
            <img className={`${s.border}`}
                 src={border}/>
    )
})

export default Border
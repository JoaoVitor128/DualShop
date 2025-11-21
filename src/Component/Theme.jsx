import './theme.css'

import { useContext, useState } from "react"

const Theme = ({ThemeContext}) => {
    const [themeState, dispatch] = useContext(ThemeContext)

    return (
        <div>
            <button onClick={() => dispatch({ type: "CHANGE_THEME" })} className='theme'>Mudar Tema</button>
        </div>
    )
}

export default Theme
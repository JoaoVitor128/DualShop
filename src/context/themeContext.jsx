import { createContext, useReducer } from "react"

const initialStates = {
    theme: 1,
}

const themeReducer = (state, action) => {
    switch (action.type) {
        case "CHANGE_THEME":
            return {
                ...state,
                theme: state.theme ? 0 : 1
            }
        default: return state
    }
}
export const ThemeContext = createContext()
export const ThemeProvider = ({ children }) => {
    const value = useReducer(themeReducer, initialStates)
    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
} 
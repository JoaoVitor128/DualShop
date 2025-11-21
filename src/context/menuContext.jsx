import { createContext, useReducer } from "react"

const STAGES = ["Shop", "Cart"]

const initialStates = {
    siteStage: STAGES[0]
}

const menuReducer = (state, action) => {
    switch (action.type) {
        case "GO_TO_MENU":
            return {
                ...state,
                siteStage: STAGES[1]
            }
        case "GO_TO_SHOP":
            return {
                ...state,
                siteStage: STAGES[0]
            }

        default: return state
    }
}
export const MenuContext = createContext()
export const MenuProvider = ({ children }) => {
    const value = useReducer(menuReducer, initialStates)
    return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>
} 
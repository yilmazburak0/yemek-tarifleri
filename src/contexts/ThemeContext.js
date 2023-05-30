import { useReducer } from "react";
import themeReducer from "../reducers/themeReducer";

const { createContext } = require("react")

export const ThemeContext = createContext();

export function ThemeProvider({children}){
    const [state,dispatch] = useReducer(themeReducer,{color:"primary",mode:"light"});

    const changeColor = (value) =>{
        dispatch({
            type:"CHANGE_COLOR",
            payload:value
        })
    };

    const changeMode = (value) =>{
        dispatch({
            type:"CHANGE_MODE",
            payload:value
        })
    };


    return(
        <ThemeContext.Provider value={{...state,changeColor,changeMode}}>
            { children }
        </ThemeContext.Provider>
    )

};
import {createContext} from "react";

export const ModeContext =  createContext(window.innerWidth >= 800 ? 'pc' : 'mobile');
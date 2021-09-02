import { createContext } from "react";
const ContextTheme = createContext(["light",()=>{}]) 
// default values; callback is used as its a good practice
export default ContextTheme;
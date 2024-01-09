import { createContext, useState } from "react"
import { Router } from "../router/router";

export const userContext = createContext("");

export const ContextUser = ()=>{
    const [user, setUser] = useState<any>([])


    return (
        <userContext.Provider value={[user, setUser]}>
            <Router/> 
        </userContext.Provider>

    )
}
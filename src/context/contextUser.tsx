import { createContext, useState } from "react"
import { Router } from "../router/router";
import { IloginReturn } from "../interfaces/interfaceLogin";

export const userContext = createContext("");

export const ContextUser = ()=>{
    const [user, setUser] = useState<IloginReturn>({id:0, token:""})


    return (
        <userContext.Provider value={[user, setUser]}>
            <Router/> 
        </userContext.Provider>

    )
}
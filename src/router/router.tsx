import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Login } from "../pages/login/Index"


export const Router = ()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" Component={Login}/>
            </Routes>
        </BrowserRouter>

    )
}
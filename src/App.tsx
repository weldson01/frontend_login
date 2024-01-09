import { BrowserRouter } from "react-router-dom"
import { Router } from "./router/router"
import { ContextUser } from "./context/contextUser"

export const App = ()=>{
  return (
      <ContextUser>
      </ContextUser>
  )
}
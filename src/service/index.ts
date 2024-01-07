import axios from "axios";
import { Ilogin } from "../interfaces/interfaceLogin";


class ServiceAPI {
    async login({email,password}: Ilogin){
        console.log("hiii");
        axios.post("http://localhost:3100/login", {email:email, password: password}).then(
            (value)=>{
                console.log(value.data)
                return value.data
            }
        )
    }
    async index(){
        await axios.get("http://localhost:3100/");
    }
}

export default new ServiceAPI;
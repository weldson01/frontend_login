import axios from "axios";


export const loginAPI = async(email :string, password:string)=>{
    const response = await axios.post("http://localhost:3100/login", {email:email, password:password});
    console.log(response.data)
    const {id, token} = response.data;
    return {id, token};
}

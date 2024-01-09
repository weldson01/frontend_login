import { useContext,  useEffect,  useState } from "react"
import styled from "styled-components"
import  ServiceAPI, { loginAPI } from "../../service"
import { userContext } from "../../context/contextUser"

const Container = styled.div`
  margin:0;
  padding:0;
  width: 100%;
  height: 100vh;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Form = styled.form`
  margin:0;
  border:0;
  height: 70%;
  width: 30%;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: red;
  gap:2rem;
  border-radius: 1rem;
  background: linear-gradient(to top right, rgb(50,150,150), rgb(200,250,250) 30%, rgb(50,150,150));

  input{
    width: 80%;
    height: 3em;
    font-size: 1.2rem;
    border-radius: 1rem;
    border: 0;
    padding-left: 1rem;
    background: linear-gradient(to top, rgb(255,255,255) 90%,rgb(200,200, 200));
    outline:0;
    
  }
  input[type="submit"]{
    background: linear-gradient(rgb(255,255,255),rgb(200,200,200));
  }
  input[type="submit"]:hover{
      background: linear-gradient(rgb(200,200,200),rgb(255,255,255));
  }
  #title{
    align-self: flex-start;
    margin-left: 2.5rem;
    font-family: "Arial"
  }
`

export const Login = ()=>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useContext(userContext);
    const [token, setToken] = useState("");
    // todo corrigir bug salvamento de token

    async function login(){
      event?.preventDefault();
      const response = await loginAPI(email,password);
      if(response){
        setToken(response.token)
      }
    }
    

    return(
    <Container>
      <Form>
        <h1 id="title">Login: </h1>
        {email && email}
        {token && token}
        <input type="email" name="email" id="" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="E-mail" />
        <input type="password" name="password" id="" value={password} onChange={(e)=> setPassword(e.target.value)}  placeholder="Senha"/>
        <input type="submit" value="Login" onClick={login}/>
      </Form>
    </Container>
    )
}
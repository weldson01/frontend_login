import { useContext, useEffect,  useState } from "react"
import styled from "styled-components"
import { loginAPI } from "../../service"
import { userContext } from "../../context/contextUser"
import { redirect } from "react-router-dom"

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
  button{
    width: 50%;
    height: 3em;
    font-size: 1.2rem;
    font-size: 1.2rem;
    border-radius: 1rem;
    border: 0;
    background: linear-gradient(rgb(255,255,255),rgb(200,200,200));
  }
  button:hover{
      background: linear-gradient(rgb(200,200,200),rgb(255,255,255));
      cursor:pointer;
  }
  #title{
    align-self: start;
    margin-left: 2rem;
    font-family: "Arial";
    font-size: 1.5em;
  }
  label{
    align-self: start;
    margin-left: 2em;
  }
`

export const Login = ()=>{
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useContext(userContext);
  
  useEffect(()=>{
    console.log(user)
  },[user])

  async function handleLogin(e:any){
    e.preventDefault();
    await loginAPI(email, password).then(response=>{
      setUser(response)
    })
  }

  return(
    <Container>
      <Form onSubmit={handleLogin}>
        {user && user?.id}
        <h3 id="title">Login</h3>
        <label htmlFor="email">Email: </label>
        <input type="email" name="email" id="email" onChange={e=> setEmail(e.target.value)}/>
        <label htmlFor="password">Password: </label>
        <input type="password" name="password" id="password" onChange={e=> setPassword(e.target.value)}/>
        <button>Login</button>
      </Form>
    </Container>
  )
}
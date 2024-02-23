import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components"
import axios from "axios";

export default function FormLogin(){
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    function submitData(event){
        event.preventDefault();

        axios
          .post('http://localhost:3000/login', {
            name: email,
            password: password,
          })
          .then((response) => {
            console.log(response.data);
            setEmail("");
            setPassword("");
            navigate("/home");
          })
          .catch((error) => {
            console.error(error);
          });
    }

    return (
      <ContainerForm>
        <TextLogin>Login</TextLogin>
        <Form onSubmit={submitData}>
          <InputForm
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            autocomplete="off"
            required
          />
          <InputForm
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            autocomplete="off"
            required
          />
          <ButtonSubmit type="submit">Entrar</ButtonSubmit>
        </Form>
        <Link>
          <GoToRegistration>Não possui login? Cadastra-se.</GoToRegistration>
        </Link>
      </ContainerForm>
    );
}

const ContainerForm = styled.div`
  width: 400px;
  height: 500px;
  background-color: rgba(255, 255, 255, 0.5); 
  border-radius: 30px;
  border: 1px solid #cec7c7;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
  padding-top: 20px;
  gap: 20px;
  a{
    text-decoration: none;
  }
`;
const TextLogin = styled.h1`
  color: #b80768;
  font-size: 32px;
  font-weight: bolder;
  letter-spacing: 2px;
`;
const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const InputForm = styled.input`
  width: 70%;
  height: 40px;
  outline: none;
  background-color: transparent;
  border: 1px solid #b80768;
  border-radius: 50px;
  margin-top: 15px;
  box-sizing: border-box;
  padding-left: 15px;
  color: #52022e;
  font-size: 14px;
  font-weight: 600;
  &::placeholder {
    color: #b80768;
    font-size: 14px;
    font-weight: 700;
  }
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px white inset !important;
    -webkit-text-fill-color: #52022e !important;
  }
`;
const ButtonSubmit = styled.button`
  width: 70%;
  height: 40px;
  outline: none;
  background-color: #b80768;
  border: none;
  border-radius: 50px;
  margin-top: 15px;
  box-sizing: border-box;
  padding-left: 15px;
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 1px;
  cursor: pointer;
  margin-bottom: 10px;
  &:hover {
    background-color: #52022e;
  }
`;
const GoToRegistration = styled.h2`
  color: #242222;
  font-size: 16px;
  font-weight: bolder;
  cursor: pointer;
`;
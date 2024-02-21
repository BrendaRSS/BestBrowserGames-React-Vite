import styled from "styled-components";
import FormLogin from "../components/FormLogin";
import image from "../assets/images/game.jpg";

export default function LoginPage(){
    return(
        <ContainerLogin image={image}>
            <FormLogin/>
        </ContainerLogin>
    )
}

const ContainerLogin = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${(props) => props.image});
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;
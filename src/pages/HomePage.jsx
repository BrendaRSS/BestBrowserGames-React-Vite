import styled from "styled-components"
import Header from "../components/Header";
import game from '../assets/images/game.jpg';
import { Outlet } from "react-router-dom";

export default function HomePage(){
    return (
      <Container>
        <Header />
        <Section>
          <img src={game} alt="Jogador em cadeira" />
          <Outlet  />
        </Section>
      </Container>
    );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #ffffff;
`;
const Section = styled.section`
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 50%;
    height: 90%;
    object-fit: cover;
    border-radius: 20px;
  }
`;
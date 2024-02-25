import styled from "styled-components"
import Header from "../components/Header";
import { Outlet, useLocation } from 'react-router-dom';
import GamesPage from "./GamesPage";

export default function HomePage(){
  const location = useLocation();
  const showGamePage = location.pathname === '/home/games';

    return (
      <Container>
        <Header />
        <Section>
          {showGamePage ? <GamesPage /> : <Outlet />}
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
  /* margin-top: 50px; */
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
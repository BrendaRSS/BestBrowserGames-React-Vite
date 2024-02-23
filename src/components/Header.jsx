import { NavLink } from "react-router-dom";
import styled from "styled-components";

export default function Header(){
    return (
      <HeaderComponent>
        <Title>BestBrowserGames</Title>
        <Line></Line>
        <ContainerPages>
          <Link>
            <NavLink to="/home/games">Games</NavLink>
          </Link>
          <Link>Favorites</Link>
          <Link>Add Game</Link>
          <Link>Filter</Link>
        </ContainerPages>
      </HeaderComponent>
    );
}

const HeaderComponent = styled.header`
  width: 100vw;
  height: 70px;
  box-shadow: 1px -1px 6px 0px rgba(0, 0, 0, 0.75);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
  padding: 0px 15px;
  gap: 15px;
  a {
    text-decoration: none;
    color: #b80768;
    font-weight: 700;
  }
`;
const Title = styled.h1`
    font-size: 24px;
    color: #b80768;
    font-weight: 700;
`;
const Line = styled.div`
  width: 1px;
  height: 40px;
  background-color: #b8076897;
`;
const ContainerPages = styled.div`
    width: 80%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
`
const Link = styled.div`
  width: 150px;
  height: 30px;
  background-color: #ffffff;
  border: 1px solid #b80768;
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #b80768;
  font-weight: 700;
  cursor: pointer;
  &:hover {
    background-color: #b80768;
    border: 1px solid #ffffff;
    a {
      color: #ffffff;
    }
  }
`;

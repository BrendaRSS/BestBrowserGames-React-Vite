import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components"
import Card from "../components/Card";

export default function GamesPage(){
    const [cards, setCards] = useState();

    useEffect(()=>{
        axios
        .get('http://localhost:3000/games')
        .then((response)=>{
            console.log(response.data);
            setCards(response.data);
        })
        .catch((error)=>{
            console.error(error);
        })
    }, []);

    return (
      <ContainerGamesPage>
        {cards ? 
        cards.map((card, index) => (
            <Card cards={cards} />
        ))
        :
        <h1>Carregando..</h1>}
      </ContainerGamesPage>
    );
}

const ContainerGamesPage = styled.div`
  width: 100%;
  min-height: 550px;
  box-sizing: border-box;
  padding-top: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  gap: 15px;
`;
import styled from "styled-components";
import axios from "axios";
import Card from "../components/Card";
import { useEffect, useState } from "react";

export default function FavoritesPage(){
    const [cards, setCards] = useState();

    useEffect(() => {
      axios
        .get('http://localhost:3000/games?favorite=true')
        .then((response) => {
          console.log('favorite', response.data);
          setCards(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }, []);

    return (
      <ContainerGamesPage>
        {cards ? (
          cards.map((card, index) => <Card card={card} setCards={setCards} key={card.id} />)
        ) : (
          <h1>Carregando..</h1>
        )}
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
import styled from 'styled-components';
import { FaStar } from 'react-icons/fa';
import axios from 'axios';

export default function Card({ card, setCards }) {
  console.log(card);

  function favorite(id, fav) {
    console.log(id, fav);

    axios
      .patch(`http://localhost:3000/games/${id}`, { favorite: !fav })
      .then((res) => {})
      .catch((error) => {
        console.error(error);
      });

    update();
  }

  function update() {
    axios
      .get('http://localhost:3000/games')
      .then((response) => {
        setCards(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <ContainerCard>
      <img src={card.image} alt="Game image" />
      <DetailsCard>
        <p>Nome: {card.name}</p>
        <p>Categoria: {card.category}</p>
        <p>Descrição: {card.description}</p>
        <ButtonStar onClick={() => favorite(card.id, card.favorite)} star={card.favorite}>
          {card.favorite ? <span>Favoritado:</span> : <span>Tornar Favorito:</span>}
          <FaStar />
        </ButtonStar>
      </DetailsCard>
    </ContainerCard>
  );
}

const ContainerCard = styled.div`
  width: 350px;
  height: 350px;
  border: 1px solid #666363;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 6px;
  img {
    width: 340px;
    height: 200px;
    object-fit: cover;
    border-radius: 15px 15px 0px 0px;
  }
`;
const DetailsCard = styled.div`
  width: 340px;
  height: 140px;
  border-radius: 0px 0px 15px 15px;
  box-sizing: border-box;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 10px;
`;
const ButtonStar = styled.div`
  svg {
    cursor: pointer;
    size: 20px;
    color: ${(props) => (props.star === false ? 'black' : 'pink')};
  }
`;

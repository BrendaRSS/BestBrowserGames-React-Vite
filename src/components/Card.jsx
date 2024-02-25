import styled from "styled-components";
import { FaStar } from 'react-icons/fa';

export default function Card({card}){
    console.log(card);

    function favorite(){

    }
    return (
      <ContainerCard>
        <img src={card.image} alt="Game image" />
        <DetailsCard>
          <p>Nome: {card.name}</p>
          <p>Categoria: {card.category}</p>
          <p>Descrição: {card.description}</p>
          <div onClick={() => favorite(card.id)} favorite={card.favorite}>
            {card.favorite ? <span>Favoritado:</span> : <span>Favoritado:</span>} <FaStar />
          </div>
        </DetailsCard>
      </ContainerCard>
    );
}

const ContainerCard = styled.div`
    width:350px;
    height:350px;
    border: 1px solid #666363;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 6px;
    img{
        width: 340px;
        height: 200px;
        object-fit: cover;
        border-radius: 15px 15px 0px 0px;
    }
`
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
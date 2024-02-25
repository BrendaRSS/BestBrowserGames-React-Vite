import styled from "styled-components"

export default function Card({cards}){
    return(
        <ContainerCard>
            Card Aqui
        </ContainerCard>
    )
}

const ContainerCard = styled.div`
    width:250px;
    height:250px;
    border: 1px solid #413f3f;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
`
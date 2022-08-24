import styled from "styled-components";

export const CoffeesContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    width: 69%;
    margin: 0 auto;
`

export const CoffeeTitle = styled.header`
    display: flex;
    width: 69%;

    margin: 4rem auto;

    font-size: 32px;
    font-family: 'Baloo 2', cursive;
    color: ${(props) => props.theme["base-subtitle"]};
    font-weight: 900;
`
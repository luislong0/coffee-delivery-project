import styled from "styled-components";

export const CoffeeCardContainer = styled.div`

    display: flex;
    justify-content: space-between;

    padding: 2rem 0 2rem 0;

    border-bottom: 1px solid ${(props) => props.theme["base-button"]};

    img {
        width: 4rem;
        height: 4rem;
    }

`

export const CoffeeInfo = styled.div`
    display: flex;
`

export const CardContainerFunctions = styled.div`
    margin-left: 1.5rem;
`

export const QuantityAndRemove = styled.div`
    display: flex;
    gap: 1rem;
`

export const DeleteButton = styled.button`
    background-color: ${(props) => props.theme["base-button"]};
    border-radius: 5px;
    
    width: 6rem;
    height: 2rem;
    border: none;

    display: flex;
    align-items: center;
    justify-content: center;

    gap: 0.2rem;

    font-size: 12px;
    text-transform: uppercase;


    cursor: pointer;

    &:hover {
        background-color: ${(props) => props.theme["base-hover"]};
        transition: all ease-out 0.2s;
    }

    svg {
        width: 1rem;
        height: 1rem;
        color: ${(props) => props.theme.purple};
    }
`

export const QuantityContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${(props) => props.theme["base-button"]};
    border-radius: 5px;
    
    padding: 0 0.5rem;
    width: 4.5rem;
    height: 2rem;

    gap: 0.5rem;

    button {
        background-color: transparent;
        border: none;

        color: ${(props) => props.theme.purple};
        text-align: center;
        margin-top: 0rem;
        margin-left: 0rem;

        cursor: pointer;
    }

    svg {
        color: ${(props) => props.theme.purple};
        background-color: transparent;
        margin-top: 0rem;
        margin-left: 0rem;

        border: none;
    }

    span {
        font-family: 'Roboto', sans-serif;

        font-size: 1rem;
        font-weight: 500;
    }
`
import styled from "styled-components";

export const SelectedCoffees = styled.div`
    width: 40%;

    span {
        font-family: 'Baloo 2', cursive;
        font-size: 18px;

        color: ${(props) => props.theme["base-subtitle"]};
    }

`

export const CoffeeSelectionContainer = styled.div`
    background-color: ${(props) => props.theme["base-card"]};

    display: flex;
    flex-direction: column;

    padding: 1rem 2.5rem;
    margin-top: 1rem;

    border-radius: 5px 25px 5px 25px;

    a {
        display: flex;
        justify-content: center;
        align-items: center;

        color: ${(props) => props.theme.white};

        background-color: ${(props) => props.theme.yellow};

        height: 2.875rem;

        margin-top: 1.5rem;
        margin-bottom: 2.5rem;

        border-radius: 5px;
        text-decoration: none;
        text-transform: uppercase;

        letter-spacing: 1px;

        &:hover {
            background-color: ${(props) => props.theme["yellow-dark"]};
            transition: all ease-out 0.2s;
        }
    }
    
    
`

export const CoffeesList = styled.div`

`

export const PricesContainer = styled.div`
    display: flex;
    justify-content: space-between;

    margin-top: 1rem;
    
    div {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    div:last-child {
        text-align: right;
    }
`

export const ConfirmButton = styled.button`
    background-color: transparent;
    color: ${(props) => props.theme.white};

    border: none;
    border-radius: 5px;

    height: 2.875rem;

    margin-top: 1.5rem;
    margin-bottom: 2.5rem;

    font-size: 0.875rem;
    text-transform: uppercase;

    &:disabled {
        cursor: not-allowed;
    }
`
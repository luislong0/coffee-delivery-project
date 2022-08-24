import styled from "styled-components";

export const CoffeeCardContainer = styled.div`
    width: 18rem;
    height: 21.4rem;

    background-color: ${(props) => props.theme["base-card"]};
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    border-radius: 5px 25px 5px 25px;
    padding: 1.5rem;

    margin-right: 3rem;
    margin-bottom: 5rem;

    img {
        margin-top: 1rem;
        margin-bottom: 1rem;
    }

    span {
       display: flex;
       background-color : ${(props) => props.theme["yellow-light"]};
       color: ${(props) => props.theme["yellow-dark"]};
       text-transform: uppercase;
       font-size: 0.63rem;
       font-weight: 900;
       letter-spacing: 1px;

       padding: 0.25rem 0.8rem;
       justify-content: center;
       align-items: center;

       border-radius: 20px;

       margin-bottom: 1rem;
    }

    p {
        font-size: 0.875rem;
        color: ${(props) => props.theme["base-label"]};
        text-align: center;

        margin-bottom: 2.5rem;
    }

    h2 {
        margin-bottom: 0.8rem;
        font-family: 'Baloo 2', cursive;
    }
`

export const PriceContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 0;

    p {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: -0.1rem;

        font-size: 0.875rem;
        font-weight: 500;
    }

    span {
        font-family: 'Baloo 2', cursive;

        margin-top: 0.8rem;
        font-size: 1.5rem;
        font-weight: 900;
        background-color: transparent;
        color: ${(props) => props.theme["base-text"]};
    }

    svg {
        /* border: 0.375rem solid ${(props) => props.theme["purple-dark"]}; */
        
        
        color: ${(props) => props.theme.white};
        

    }

    button {
        background-color: ${(props) => props.theme["purple-dark"]};
        width: 38px;
        height: 38px;
        border: none;

        margin-top: 0.8rem;
        margin-left: 1rem;

        display: flex;
        justify-content: center;
        align-items: center;

        border-radius: 5px;

        cursor: pointer;

        &:hover {
            background-color: ${(props) => props.theme.purple};
            transition: all ease-out 0.2s;
        }

        &:disabled {
            opacity: 0.9;
            cursor: not-allowed
        }

        &:hover:disabled {
            background-color: ${(props) => props.theme["purple-dark"]};
            transition: all ease-out 0.2s;
        }
    }
`

export const QuantityContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${(props) => props.theme["base-button"]};
    border-radius: 5px;
    
    padding: 0 0.5rem;
    width: 5.5rem;
    height: 2.375rem;


    margin-top: 0.8rem;

    button {
        background-color: transparent;
        border: none;

        color: ${(props) => props.theme.purple};
        text-align: center;
        margin-top: 0rem;
        margin-left: 0rem;

        &:hover {
            background-color: transparent;
            transition: all ease-out 0.2s;
        }

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

export const CoffeeTypes = styled.div`
    display: flex;
    gap: 0.5rem;
`
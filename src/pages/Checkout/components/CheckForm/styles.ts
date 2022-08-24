import styled from "styled-components"

export const CheckoutForm = styled.div`
    width: 60%;

    span {
        font-family: 'Baloo 2', cursive;
        font-size: 18px;

        color: ${(props) => props.theme["base-subtitle"]};
    }
`

export const AddressForm = styled.div`
    background-color: ${(props) => props.theme["base-card"]};

    display: flex;
    flex-direction: column;

    padding: 2.5rem;
    margin-top: 1rem;

    border-radius: 10px;

    p {
        color: ${(props) => props.theme["base-subtitle"]};

        font-size: 1.2rem;
        letter-spacing: 2px;
        font-weight: 500;

        display: flex;
        align-items: center;
    }

    svg {
        color: ${(props) => props.theme["yellow-dark"]};
        margin-right: 0.5rem;
    }

    span {
        display: flex;
        font-size: 14px;
        font-family: 'Roboto', sans-serif;

        margin-left: 1.9rem;
        margin-top: 0.5rem;
        margin-bottom: 3rem;
    }

    input {

        height: 3.5rem;
        border-radius: 5px;
        padding: 0 1rem;

        background-color: ${(props) => props.theme["base-input"]};
        border: 1px solid ${(props) => props.theme["base-button"]};

        margin-bottom: 1rem;

        &:focus {
            box-shadow: none;
            border-color: ${(props) => props.theme["yellow-dark"]};
        }     
    }
    
`
export const Input35 = styled.input`
    width: 35%;
    margin-right: 1.5rem;
`

export const Input100 = styled.input`
    width: 100%;
`
export const Input62 = styled.input`
    width: 62%;
`
export const Input50 = styled.input`
    width: 50%;
    margin-right: 1rem;
`
export const Input10 = styled.input`
    width: 10%;
`


export const Payment = styled.div`
    margin-top: 0.75rem;
    padding: 2.5rem;
    background-color: ${(props) => props.theme["base-card"]};

    border-radius: 10px;

    svg {
        color: ${(props) => props.theme.purple};
    }
     
    p {
        display: flex;
        align-items: center;
        color: ${(props) => props.theme["base-subtitle"]};

        font-size: 1.2rem;
        letter-spacing: 2px;
        font-weight: 500;

        svg {
            margin-top: -1px;
            margin-right: 0.5rem;
        }
    }

    span {
        display: flex;
        font-size: 14px;
        font-family: 'Roboto', sans-serif;

        margin-left: 1.9rem;
        margin-top: 0.5rem;
        margin-bottom: 2rem;
    }

`

export const ButtonsPayment = styled.div`
    display: flex;
    justify-content: space-between;

    button {
        height: 3.18rem;
        width: 13.19rem;

        display: flex;
        align-items: center;
        gap: 0.5rem;

        padding-left: 1rem;

        background-color: ${(props) => props.theme["base-button"]};
        border: none;
        color: ${(props) => props.theme["base-text"]};

        font-size: 0.75rem;
        font-weight: 500;
        text-transform: uppercase;
        word-spacing: 1px;
        border-radius: 10px;

        cursor: pointer;

        /* &.active {
            color: ${(props) => props.theme["purple-light"]};
        } */

        &:hover {
            background-color: ${(props) => props.theme["base-hover"]};
            transition: all ease-out 0.2s;
        }
    }

    button.active {
        background-color: ${(props) => props.theme["purple-light"]};
        border: 1px solid ${(props) => props.theme.purple};
        color: ${(props) => props.theme["purple-dark"]};
    }
`

export const SubmitButton = styled.button`
    background-color: ${(props) => props.theme.yellow};
    color: ${(props) => props.theme.white};

    border: none;
    border-radius: 5px;

    height: 2.875rem;
    width: 30%;

    font-size: 0.875rem;
    text-transform: uppercase;

    cursor: pointer;

    &:hover {
        background-color: ${(props) => props.theme["yellow-dark"]};
        transition: all ease-out 0.2s;
    }
`
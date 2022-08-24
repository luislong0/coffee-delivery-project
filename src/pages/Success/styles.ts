import styled from "styled-components";

export const SuccessContainer = styled.div`
    display: flex;
    /* justify-content: center; */
    flex-direction: column;

    padding: 4rem 10rem;

    gap: 2rem;

    h1 {
        font-size: 2rem;
        font-family: 'Baloo 2', cursive;
        font-weight: 700;

        color: ${(props) => props.theme["yellow-dark"]};
    }

    span {
        display: flex;
        font-size: 1.25rem;
        font-weight: 100;

        color: ${(props) => props.theme["base-subtitle"]};

        margin-top: -2rem;
    }

    
`

export const InfoPlusIMG = styled.div`
    display: flex;
    gap: 30rem;
`
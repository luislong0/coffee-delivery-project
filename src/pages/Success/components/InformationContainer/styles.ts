import styled from "styled-components";

export const InformationContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    position: relative;
    background-color: ${(props) => props.theme.background};

    padding: 2rem;

    gap: 2.5rem;

    width: 32.875rem;
    height: 16.875rem;

    border-radius: 5px 25px 5px 25px;

    &::before {
        content: "";
        position: absolute;
        inset: 0;
        background: linear-gradient(to right, red, purple);
        z-index: -1;
        margin: -1px;
        padding: 2.5rem;

        border-radius: 7px 27px 7px 27px;
    }
`

export const InformationCards = styled.div`
    display: flex;
    align-items: center;

    gap: 1rem;

    svg {
        color: ${(props) => props.theme.white};
    }

    div {
        display: flex;
        flex-direction: column;
        
        p {
            font-size: 1rem;
            display: flex;

            gap: 0.5rem;
        }

        span {
            font-size: 1rem;
            font-weight: 700;

            color: ${(props) => props.theme["base-subtitle"]};

            margin-top: 0;
        }
    }
` 

export const PurpleBackground = styled.div`
    width: 2rem;
    height: 2rem;
    background-color: ${(props) => props.theme.purple};
    border-radius: 25px;

    display: flex;
    justify-content: center;
    align-items: center ;
`

export const YellowBackground = styled.div`
    width: 2rem;
    height: 2rem;
    background-color: ${(props) => props.theme.yellow};
    border-radius: 25px;

    display: flex;
    justify-content: center;
    align-items: center ;
`

export const OrangeBackground = styled.div`
    width: 2rem;
    height: 2rem;
    background-color: ${(props) => props.theme["yellow-dark"]};
    border-radius: 25px;

    display: flex;
    justify-content: center;
    align-items: center ;
`
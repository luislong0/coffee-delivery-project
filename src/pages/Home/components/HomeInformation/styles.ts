import styled from "styled-components";

export const HomePageInformationContainer = styled.div`
    display: flex;
    justify-content: center;
    /* align-items: center; */

    gap: 15rem;
    padding: 4rem 0;
`

export const HomepageInformation = styled.div`
    width: 30%;
    

    h1 {
        font-family: 'Baloo 2', cursive;
        font-size: 48px;
        font-weight: 900;

        color: ${(props) => props.theme["base-title"]};
    }

    h4 {
        font-size: 20px;
        font-weight: 400;

        color: ${(props) => props.theme["base-subtitle"]};

        padding-top: 1rem;
        padding-bottom: 5rem;
        
        letter-spacing: 0.05rem;
    }
`

export const HomeInformationDivWithIcons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
`

export const InfoPlusIconBox = styled.div`
    display: flex;
    align-items: flex-start;

    flex-direction: column;
    font-size: 16px;

    
    
    svg{
        width: 2.5rem;
        height: 2.5rem;
        padding: 8px;
        margin-right: 2rem;

        color: ${(props) => props.theme.white};
    }

    span {
        color: ${(props) => props.theme["base-text"]};
    }
`

export const OrangeDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    margin-bottom: 1.67rem;
    margin-right: 3.34rem;

    &:hover {
        transform: scale(1.1);
        transition: all ease-out 0.2s;
    }

    svg {
        background-color: ${(props) => props.theme["yellow-dark"]};
        border-radius: 25px;
    }
`

export const YellowDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
    margin-right: 3.34rem;

    &:hover {
        transform: scale(1.1);
        transition: all ease-out 0.2s;
    }

    svg {
        background-color: ${(props) => props.theme["yellow"]};
        border-radius: 25px;
    }
`

export const GrayDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    margin-bottom: 1.67rem;

    &:hover {
        transform: scale(1.1);
        transition: all ease-out 0.2s;
    }
    
    svg {
        background-color: ${(props) => props.theme["base-text"]};
        border-radius: 25px;
    }
`

export const PurpleDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        transform: scale(1.1);
        transition: all ease-out 0.2s;
    }
    
    svg {
        background-color: ${(props) => props.theme.purple};
        border-radius: 25px;
    }
`

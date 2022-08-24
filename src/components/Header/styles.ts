import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 10rem;

    /* width: 100%;
    background-color: ${(props) => props.theme.background};

    position: fixed;

    height: 100px; */


    nav {
        display: flex;
        gap: 1.125rem;

        div {
            display: flex;
            justify-content: center;
            align-items: center;

            background: ${(props) => props.theme["purple-light"]};
            color: ${(props) => props.theme.purple};
            font-weight: 700;

            padding: 0.8rem;
            border-radius: 10px;

            gap: 0.25rem;
        }

        div.notActive {
            background-color: ${(props) => props.theme["yellow-dark"]};
            color: ${(props) => props.theme.white};

            width: 1.25rem;
            height: 1.25rem;

            margin-left: -2rem;
            margin-top: -0.8rem;

            border-radius: 25px;

            display: none;
        }

        div.activeCoffee {
            background-color: ${(props) => props.theme["yellow-dark"]};
            color: ${(props) => props.theme.white};

            width: 1.25rem;
            height: 1.25rem;

            margin-left: -2rem;
            margin-top: -0.8rem;

            border-radius: 25px;

            font-size: 1rem;

            display: flex;
        }

        a {

            padding: 0.3125rem;

            display: flex;
            justify-content: center;
            align-items: center;

            color: ${(props) => props.theme["yellow-dark"]};

            background-color: ${(props) => props.theme["yellow-light"]};
            border-radius: 10px;
            border: 3px solid transparent;

            &:hover {
                border: 3px solid ${(props) => props.theme["yellow-dark"]};
                transition: all ease-out 0.2s;
            }

            &:active {
                border: 3px solid ${(props) => props.theme["yellow-dark"]};
                transition: all ease-out 0.2s;
            }
        }
    }
`

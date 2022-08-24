import styled from "styled-components";

export const HomeContainer = styled.main`
    a {

            display: flex;
            gap: 0.8rem;
            justify-content: center;
            align-items: center;
            width: 200px;
            height: 50px;
            margin-bottom: 5rem;
            margin-left: 18rem;

            color: ${(props) => props.theme["yellow-dark"]};
            text-decoration: none;
            text-transform: capitalize;

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
`



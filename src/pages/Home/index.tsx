import { Scroll } from "phosphor-react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CoffeeContext } from "../../contexts/CoffeeContext";
import { Coffees } from "./components/Coffees";
import { HomeInformation } from "./components/HomeInformation/";
import { HomeContainer } from "./styles";

export function Home() {
    return (
        <HomeContainer>
            <HomeInformation />
            <Coffees />
            <NavLink to="/History" title="Historico...">
                    <Scroll size={22} weight="bold" />
                    ultima compra 
            </NavLink>
        </HomeContainer>
    )
}
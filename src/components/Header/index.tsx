import { House, MapPin, ShoppingCart } from "phosphor-react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import logoCoffee from '../../assets/Logo-coffee.svg'
import { CoffeeContext } from "../../contexts/CoffeeContext";
import {  HeaderContainer } from "./styles";

export function Header() {

    const { coffeeSelectedQuantity, coffeeSelectedController } = useContext(CoffeeContext)

    return (
    <HeaderContainer>
        <img src={logoCoffee} alt="" />
        <nav>
            <div>
                <MapPin size={22} weight="bold" />
                <span>Palmital, SP</span>
            </div>
            <NavLink to="/" title="Home">
                <House size={30} weight="bold" />
            </NavLink>
            <NavLink to="/checkout" title="Finalizar pedido">
                <ShoppingCart size={30} weight="bold" />
            </NavLink>
            <div className={coffeeSelectedController}>
                {coffeeSelectedQuantity}
            </div>
        </nav>
    </HeaderContainer>
    )
}
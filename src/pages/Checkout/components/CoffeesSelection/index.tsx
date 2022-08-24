import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { CoffeeContext } from "../../../../contexts/CoffeeContext";
import { CoffeeSelectedCard } from "./components/CoffeeSelectedCard";
import { CoffeeSelectionContainer, CoffeesList, ConfirmButton, PricesContainer, SelectedCoffees } from "./styles";

export function CoffeesSelection() {

    const { coffeeCards, totalItemPrice, setControllerOff } = useContext(CoffeeContext)

    console.log("batatinha: " + coffeeCards)
    console.log("batatinha lenght: " + coffeeCards.length)

    return (
        <SelectedCoffees>
            <span>Complete seu pedido</span>
            <CoffeeSelectionContainer>
                <CoffeesList>
                    {coffeeCards.map(cards => {
                        if (cards.id) {
                            return (
                                <CoffeeSelectedCard
                                    key={cards.id} 
                                    id={cards.id}
                                    img = {cards.img}
                                    title = {cards.title}
                                    quantity = {cards.quantity}
                                    total = {cards.total}
                                />
                            )
                        }
                    })}
                </CoffeesList>
                <PricesContainer>
                    <div>
                        <p>Total de itens</p>
                        <p>Entrega</p>
                        <span>Total</span>
                    </div>
                    <div>
                        {coffeeCards.length < 2 ? (
                            <p>{"R$ 0.00"}</p>
                        ) : (
                            <p>{"R$ " + (totalItemPrice.toFixed(2))}</p>
                        )}
                        <p>R$ 3,50</p>
                        {coffeeCards.length < 2 ? (
                            <span>R$ 3.50</span>
                        ) : (
                            <span>{"R$ " + (totalItemPrice + 3.50).toFixed(2)}</span>
                        )}
                    </div>
                </PricesContainer>


                    <NavLink to="/success" type="submit" title="Finalizar pedido" onClick={setControllerOff}>
                            Confirmar Pedido
                    </NavLink>
            </CoffeeSelectionContainer>
        </SelectedCoffees>
    )
}
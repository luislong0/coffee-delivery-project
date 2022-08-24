import { CheckForm } from "./components/CheckForm";
import { CoffeesSelection } from "./components/CoffeesSelection";

import {CheckoutContainer } from "./styles";

export function Checkout() {
    return (
        <CheckoutContainer>
            <CheckForm />
            <CoffeesSelection />
        </CheckoutContainer>
    )
}
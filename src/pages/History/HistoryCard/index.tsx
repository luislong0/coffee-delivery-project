import { CoffeeCardContainer, PriceContainer, QuantityContainer } from "./styles"

interface HistoryCoffeesTypes {
    id?: number;
    img: any;
    CoffeeTitle: string
    total: number
    quantity: number
}

export function HistoryCard(props: HistoryCoffeesTypes) {
    return (
        <CoffeeCardContainer>
                <img src={props.img} />             
                <h2>{props.CoffeeTitle}</h2>
                <PriceContainer>
                    <p>R$ <span>{props.total}</span></p>
                    <QuantityContainer>
                        <span>{props.quantity}</span>
                    </QuantityContainer>
                </PriceContainer>
        </CoffeeCardContainer>
    )
}
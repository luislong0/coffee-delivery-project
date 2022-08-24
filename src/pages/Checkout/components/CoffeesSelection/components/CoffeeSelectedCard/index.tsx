import { Minus, Plus, Trash } from "phosphor-react";
import { CardContainerFunctions, CoffeeCardContainer, CoffeeInfo, DeleteButton, QuantityAndRemove, QuantityContainer } from "./styles";
import { useContext, useState } from "react";
import { CoffeeContext } from "../../../../../../contexts/CoffeeContext";



export function CoffeeSelectedCard(props: any) {
    
    const { coffeeCards, deleteCard, handleSetTotalItemPrice, handleSetTotalItemPricePlus} = useContext(CoffeeContext)

    const [coffeeSelectedCardQtd, setCoffeeSelectedCardQtd] = useState(props.quantity)
    const [coffeeSelectedCardPrice, setCoffeeSelectedCardPrice] = useState(props.total)
    
    function handleDeleteCard() {
        const cardsWithoutDeletedOne:any = coffeeCards.filter(cards => {
            return cards.id !== props.id; 
        }) 

        deleteCard(cardsWithoutDeletedOne);
        handleSetTotalItemPrice(coffeeSelectedCardPrice)
    }

    return (
        <CoffeeCardContainer>
            <CoffeeInfo>
                <img src={props.img} />
                <CardContainerFunctions>
                    
                    <span>{props.title}</span>

                    <QuantityAndRemove>
                        <QuantityContainer>
                            <button type="button" onClick={() => {
                                if (coffeeSelectedCardQtd > 0) {
                                    setCoffeeSelectedCardQtd(coffeeSelectedCardQtd - 1)
                                    setCoffeeSelectedCardPrice(coffeeSelectedCardPrice - 9.90)
                                    handleSetTotalItemPrice(9.90)
                                }
                            }
                            }>
                                <Minus size={16} weight="bold" />
                            </button>
                            <span>{coffeeSelectedCardQtd}</span>
                            <button type="button" onClick={() => {
                                if (coffeeSelectedCardQtd >= 0) {
                                    setCoffeeSelectedCardQtd(coffeeSelectedCardQtd + 1)
                                    setCoffeeSelectedCardPrice(coffeeSelectedCardPrice + 9.90)
                                    handleSetTotalItemPricePlus(9.90)
                                }
                            }
                            }>
                                <Plus size={16} weight="bold" />
                            </button>
                        </QuantityContainer>
                        <DeleteButton onClick={handleDeleteCard}>
                            <Trash/>Remover
                        </DeleteButton>

                    </QuantityAndRemove>

                </CardContainerFunctions>
            </CoffeeInfo>
            <span>{"R$ " + (coffeeSelectedCardPrice.toFixed(2))}</span>
        </CoffeeCardContainer>
    )
}
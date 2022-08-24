import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { useContext } from "react";
import { CoffeeContext } from "../../../../contexts/CoffeeContext";

import { CoffeeCardContainer, CoffeeTypes, PriceContainer, QuantityContainer } from "./styles";



export interface CoffeesTypes {
    id?: number;
    img: any;
    typeOne: string
    typeTwo?: string
    typeThree?: string
    CoffeeTitle: string
    CoffeeContent: string
    quantity: number
}

interface coffeesCardsQuantityType {
    id?: number;
    img: any
    title: string
    quantity: number
}

export function CoffeeCard(props:CoffeesTypes) {
    
    const { plusCoffeeQuantity, minusCoffeeQuantity, createNewCoffeeCard } = useContext(CoffeeContext)

    const coffeesCardsQuantity = {
        id: props.id,
        img: props.img,
        title: props.CoffeeTitle,
        quantity: props.quantity
    }

    function handleCreateNewCoffeeCard(item: any) {
        createNewCoffeeCard(coffeesCardsQuantity);
    }

    return (
        <CoffeeCardContainer>
                <img src={props.img} />
                
                <CoffeeTypes>
                    {props.typeOne ? (
                        <span>{props.typeOne}</span>
                    ) : (
                        <>
                        </>
                    )}
                    {props.typeTwo ? (
                        <span>{props.typeTwo}</span>
                    ) : (
                        <>
                        </>
                    )}
                    {props.typeThree ? (
                        <span>{props.typeThree}</span>
                    ) : (
                        <>
                        </>
                    )}
                </CoffeeTypes> 
                

                <h2>{props.CoffeeTitle}</h2>
                <p>{props.CoffeeContent}</p>
                <PriceContainer>
                    <p>R$ <span>9,90</span></p>
                    <QuantityContainer>
                        <button type="button" onClick={() => minusCoffeeQuantity(props.CoffeeTitle)} >
                            <Minus size={16} weight="bold" />
                        </button>
                        <span>{props.quantity}</span>
                        <button type="button" onClick={() => plusCoffeeQuantity(props.CoffeeTitle)} >
                            <Plus size={16} weight="bold" />
                        </button>
                    </QuantityContainer>
                    <button type="button" onClick={() => 
                        handleCreateNewCoffeeCard(coffeesCardsQuantity)
                    } 
                        disabled={props.quantity === 0}>
                        <ShoppingCart size={22} weight="bold" />
                    </button>
                </PriceContainer>
        </CoffeeCardContainer>
    )
}

// function CyclesContext(CyclesContext: any): { activeCycle: any; createNewCycle: any; interruptCurrentCycle: any; } {
//     throw new Error("Function not implemented.");
// }

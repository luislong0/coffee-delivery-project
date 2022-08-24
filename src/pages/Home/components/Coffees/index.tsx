import { CoffeeCard } from "../CoffeeCard";
import { CoffeesContainer, CoffeeTitle } from "./styles";

import coffeeImgCard1 from "../../../../assets/coffee1.svg"
import coffeeImgCard2 from "../../../../assets/coffee2.svg"
import coffeeImgCard3 from "../../../../assets/coffee3.svg"
import coffeeImgCard4 from "../../../../assets/coffee4.svg"
import coffeeImgCard5 from "../../../../assets/coffee5.svg"
import coffeeImgCard6 from "../../../../assets/coffee6.svg"
import coffeeImgCard7 from "../../../../assets/coffee7.svg"
import coffeeImgCard8 from "../../../../assets/coffee8.svg"
import coffeeImgCard9 from "../../../../assets/coffee9.svg"
import coffeeImgCard10 from "../../../../assets/coffee10.svg"
import coffeeImgCard11 from "../../../../assets/coffee11.svg"
import coffeeImgCard12 from "../../../../assets/coffee12.svg"
import coffeeImgCard13 from "../../../../assets/coffee13.svg"
import coffeeImgCard14 from "../../../../assets/coffee14.svg"
import { useContext } from "react";
import { CoffeeContext } from "../../../../contexts/CoffeeContext";



export function Coffees() {
  
  const { coffeeQuantity1, coffeeQuantity2, coffeeQuantity3, coffeeQuantity4, coffeeQuantity5, coffeeQuantity6, coffeeQuantity7, coffeeQuantity8, coffeeQuantity9, coffeeQuantity10, coffeeQuantity11, coffeeQuantity12, coffeeQuantity13, coffeeQuantity14 } = useContext(CoffeeContext);

    const coffees = [
        {
          id: 1,
          img: coffeeImgCard1, 
          content: {
            typeOne: "tradicional",
            typeTwo: "",
            typeThree: "",
            CoffeeTitle: "Expresso Americano",
            CoffeeContent: "O tradicional café feito com água quente e grãos moídos"
          },
          quantity: coffeeQuantity1
        },
      
        {
            id: 2,
            img: coffeeImgCard2, 
            content: {
              typeOne: "tradicional",
              typeTwo: "",
              typeThree: "",
              CoffeeTitle: "Expresso Tradicional",
              CoffeeContent: "Expresso diluído, menos intenso que o tradicional"
            },
            quantity: coffeeQuantity2
        },

        {
            id: 3,
            img: coffeeImgCard3, 
            content: {
              typeOne: "tradicional",
              typeTwo: "",
              typeThree: "",
              CoffeeTitle: "Expresso Cremoso",
              CoffeeContent: "Café expresso tradicional com espuma cremosa"
            },
            quantity: coffeeQuantity3
        },

        {
            id: 4,
            img: coffeeImgCard4, 
            content: {
              typeOne: "tradicional",
              typeTwo: "gelado",
              typeThree: "",
              CoffeeTitle: "Expresso Gelado",
              CoffeeContent: "Bebida preparada com café expresso e cubos de gelo"
            },
            quantity: coffeeQuantity4
        },

        {
            id: 5,
            img: coffeeImgCard5, 
            content: {
              typeOne: "tradicional",
              typeTwo: "com leite",
              typeThree: "",
              CoffeeTitle: "Café com Leite",
              CoffeeContent: "Meio a meio de expresso tradicional com leite vaporizado"
            },
            quantity: coffeeQuantity5
        },

        {
            id: 6,
            img: coffeeImgCard6, 
            content: {
              typeOne: "tradicional",
              typeTwo: "com leite",
              typeThree: "",
              CoffeeTitle: "Latte",
              CoffeeContent: "Uma dose de café expresso com o dobro de leite e espuma cremosa"
            },
            quantity: coffeeQuantity6
        },

        {
            id: 7,
            img: coffeeImgCard7, 
            content: {
              typeOne: "tradicional",
              typeTwo: "com leite",
              typeThree: "",
              CoffeeTitle: "Capuccino",
              CoffeeContent: "Bebida com canela feita de doses iguais de café, leite e espuma"
            },
            quantity: coffeeQuantity7
        },

        {
            id: 8,
            img: coffeeImgCard8, 
            content: {
              typeOne: "tradicional",
              typeTwo: "com leite",
              typeThree: "",
              CoffeeTitle: "Macchiato",
              CoffeeContent: "Café expresso misturado com um pouco de leite quente e espuma"
            },
            quantity: coffeeQuantity8
        },

        {
            id: 9,
            img: coffeeImgCard9, 
            content: {
              typeOne: "tradicional",
              typeTwo: "com leite",
              typeThree: "",
              CoffeeTitle: "Mocaccino",
              CoffeeContent: "Café expresso com calda de chocolate, pouco leite e espuma"
            },
            quantity: coffeeQuantity9
        },

        {
            id: 10,
            img: coffeeImgCard10, 
            content: {
              typeOne: "especial",
              typeTwo: "com leite",
              typeThree: "",
              CoffeeTitle: "Chocolate Quente",
              CoffeeContent: "Bebida feita com chocolate dissolvido no leite quente e café"
            },
            quantity: coffeeQuantity10
        },

        {
            id: 11,
            img: coffeeImgCard11, 
            content: {
              typeOne: "especial",
              typeTwo: "alcoólico",
              typeThree: "gelado",
              CoffeeTitle: "Cubano",
              CoffeeContent: "Drink gelado de café expresso com rum, creme de leite e hortelã"
            },
            quantity: coffeeQuantity11
        },

        {
            id: 12,
            img: coffeeImgCard12, 
            content: {
              typeOne: "especial",
              typeTwo: "",
              typeThree: "",
              CoffeeTitle: "Havaiano",
              CoffeeContent: "Bebida adocicada preparada com café e leite de coco"
            },
            quantity: coffeeQuantity12
        },

        {
            id: 13,
            img: coffeeImgCard13, 
            content: {
              typeOne: "especial",
              typeTwo: "",
              typeThree: "",
              CoffeeTitle: "Árabe",
              CoffeeContent: "Bebida preparada com grãos de café árabe e especiarias"
            },
            quantity: coffeeQuantity13
        },

        {
            id: 14,
            img: coffeeImgCard14, 
            content: {
              typeOne: "especial",
              typeTwo: "alcoólico",
              typeThree: "",
              CoffeeTitle: "Irlandês",
              CoffeeContent: "Bebida a base de café, uísque irlandês, açúcar e chantilly"
            },
            quantity: coffeeQuantity14
        },
        
      ];
    
    return (
    <>
        <CoffeeTitle>
            <span>Nossos cafés</span>
        </CoffeeTitle>
        <CoffeesContainer >
            {coffees.map(coffee => {
                return (
                    <CoffeeCard
                    key={coffee.id}
                    id={coffee.id}
                    img={coffee.img} 
                    typeOne={coffee.content.typeOne}
                    typeTwo={coffee.content.typeTwo}
                    typeThree={coffee.content.typeThree}
                    CoffeeTitle={coffee.content.CoffeeTitle}
                    CoffeeContent={coffee.content.CoffeeContent}
                    quantity={coffee.quantity}  
                    />
                )
            })}
        </CoffeesContainer>
    </>
    )
}
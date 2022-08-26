import { ChangeEvent, createContext, ReactNode, useEffect, useState } from "react"

interface CoffeeContextType {
  coffeeQuantity: number

  coffeeQuantity1: number
  coffeeQuantity2: number
  coffeeQuantity3: number
  coffeeQuantity4: number
  coffeeQuantity5: number
  coffeeQuantity6: number
  coffeeQuantity7: number
  coffeeQuantity8: number
  coffeeQuantity9: number
  coffeeQuantity10: number
  coffeeQuantity11: number
  coffeeQuantity12: number
  coffeeQuantity13: number
  coffeeQuantity14: number

  coffeePrice: number
  totalCardPrice: number
  totalItemPrice: number
  addressCompleted: any
  coffeeCards: any[]
  totalPrice: number[]
  ourArray: any[]

  plusCoffeeQuantity: (data:any) => void
  minusCoffeeQuantity: (data:any) => void
  coffeeSelectedQuantity: number
  coffeeSelectedAdd: () => void
  coffeeSelectedRemove: () => void
  setControllerOff: () => void
  addressCapture: (data: AddressData) => void
  createNewCoffeeCard: (data: any) => void
  deleteCard: (cardToDelete: string) => void
  handleSetTotalItemPrice: (handleSelectedPrice:number) => void
  handleSetTotalItemPricePlus: (handleSelectedPrice:number) => void
  paymentSelector: any 
  coffeeSelectedController: string
  paymentSelectorValue: string
}

export const CoffeeContext = createContext({} as CoffeeContextType)

interface CoffeeContextProviderProps {
  children: ReactNode
}

interface CreateCoffeeCardData {
  id?: string
  img: any
  title: string
  quantity: number
  total: number
}

interface AddressData {
  street: string,
  number: string,
  district: string,
  city: string,
  uf: string,
}

export interface CoffeeCardType {
  id?: string
  img: any
  title: string,
  quantity: number
  total: number
}

export function CoffeeContextProvider({
  children,
}: CoffeeContextProviderProps) {

  const $activeButton = document.querySelectorAll('.active');

  const coffeePrice = 9.90

  const [coffeeQuantity, setCoffeeQuantity] = useState(0)

  const [coffeeQuantity1, setCoffeeQuantity1] = useState(0)
  const [coffeeQuantity2, setCoffeeQuantity2] = useState(0)
  const [coffeeQuantity3, setCoffeeQuantity3] = useState(0)
  const [coffeeQuantity4, setCoffeeQuantity4] = useState(0)
  const [coffeeQuantity5, setCoffeeQuantity5] = useState(0)
  const [coffeeQuantity6, setCoffeeQuantity6] = useState(0)
  const [coffeeQuantity7, setCoffeeQuantity7] = useState(0)
  const [coffeeQuantity8, setCoffeeQuantity8] = useState(0)
  const [coffeeQuantity9, setCoffeeQuantity9] = useState(0)
  const [coffeeQuantity10, setCoffeeQuantity10] = useState(0)
  const [coffeeQuantity11, setCoffeeQuantity11] = useState(0)
  const [coffeeQuantity12, setCoffeeQuantity12] = useState(0)
  const [coffeeQuantity13, setCoffeeQuantity13] = useState(0)
  const [coffeeQuantity14, setCoffeeQuantity14] = useState(0)

  const [coffeeSelectedQuantity, setCoffeeSelectedQuantity] = useState(0)

  const [coffeeCards, setCoffeeCards] = useState([{}])
  const [totalPrice, setTotalPrice]:any[] = useState([])

  const [coffeeSelectedController, setCoffeeSelectedController] = useState("notActive")
  const [paymentSelectorValue, setPaymentSelectorValue] = useState("")

  const [totalCardPrice, setTotalCardPrice] = useState(0)
  const [totalItemPrice, setTotalItemPrice] = useState(0)

  const [addressCompleted, setAddressCompleted] = useState({})


  function plusCoffeeQuantity(data:any) {
    if(data === "Expresso Americano") {
      setTotalCardPrice(parseFloat((coffeeQuantity1 * coffeePrice + 9.90).toFixed(2)));
      setCoffeeQuantity1(coffeeQuantity1 + 1)
    } else if (data === "Expresso Tradicional") {
      setTotalCardPrice(parseFloat((coffeeQuantity2 * coffeePrice + 9.90).toFixed(2)));
      setCoffeeQuantity2(coffeeQuantity2 + 1)
    } else if (data === "Expresso Cremoso") {
      setTotalCardPrice(parseFloat((coffeeQuantity3 * coffeePrice + 9.90).toFixed(2)));
      setCoffeeQuantity3(coffeeQuantity3 + 1)
    } else if (data === "Expresso Gelado") {
      setTotalCardPrice(parseFloat((coffeeQuantity4 * coffeePrice + 9.90).toFixed(2)));
      setCoffeeQuantity4(coffeeQuantity4 + 1)
    } else if (data === "Café com Leite") {
      setTotalCardPrice(parseFloat((coffeeQuantity5 * coffeePrice + 9.90).toFixed(2)));
      setCoffeeQuantity5(coffeeQuantity5 + 1)
    } else if (data === "Latte") {
      setTotalCardPrice(parseFloat((coffeeQuantity6 * coffeePrice + 9.90).toFixed(2)));
      setCoffeeQuantity6(coffeeQuantity6 + 1)
    } else if (data === "Capuccino") {
      setTotalCardPrice(parseFloat((coffeeQuantity7 * coffeePrice + 9.90).toFixed(2)));
      setCoffeeQuantity7(coffeeQuantity7 + 1)
    } else if (data === "Macchiato") {
      setTotalCardPrice(parseFloat((coffeeQuantity8 * coffeePrice + 9.90).toFixed(2)));
      setCoffeeQuantity8(coffeeQuantity8 + 1)
    } else if (data === "Mocaccino") {
      setTotalCardPrice(parseFloat((coffeeQuantity9 * coffeePrice + 9.90).toFixed(2)));
      setCoffeeQuantity9(coffeeQuantity9 + 1)
    } else if (data === "Chocolate Quente") {
      setTotalCardPrice(parseFloat((coffeeQuantity10 * coffeePrice + 9.90).toFixed(2)));
      setCoffeeQuantity10(coffeeQuantity10 + 1)
    } else if (data === "Cubano") {
      setTotalCardPrice(parseFloat((coffeeQuantity11 * coffeePrice + 9.90).toFixed(2)));
      setCoffeeQuantity11(coffeeQuantity11 + 1)
    } else if (data === "Havaiano") {
      setTotalCardPrice(parseFloat((coffeeQuantity12 * coffeePrice + 9.90).toFixed(2)));
      setCoffeeQuantity12(coffeeQuantity12 + 1)
    } else if (data === "Árabe") {
      setTotalCardPrice(parseFloat((coffeeQuantity13 * coffeePrice + 9.90).toFixed(2)));
      setCoffeeQuantity13(coffeeQuantity13 + 1)
    } else if (data === "Irlandês") {
      setTotalCardPrice(parseFloat((coffeeQuantity14 * coffeePrice + 9.90).toFixed(2)));
      setCoffeeQuantity14(coffeeQuantity14 + 1)
    }
  }

  function minusCoffeeQuantity(data:any) {
    if(coffeeQuantity1 > 0 || coffeeQuantity2 > 0 || coffeeQuantity3 > 0 || coffeeQuantity4 > 0 || coffeeQuantity5 > 0 || coffeeQuantity6 > 0 || coffeeQuantity7 > 0 || coffeeQuantity8 > 0 || coffeeQuantity9 > 0 || coffeeQuantity10 > 0 || coffeeQuantity11 > 0 || coffeeQuantity12 > 0 || coffeeQuantity13 > 0 || coffeeQuantity14 > 0)
    if(data === "Expresso Americano") {
      setCoffeeQuantity1(coffeeQuantity1 - 1)
    } else if (data === "Expresso Tradicional") {
      setCoffeeQuantity2(coffeeQuantity2 - 1)
    } else if (data === "Expresso Cremoso") {
      setTotalCardPrice(parseFloat((coffeeQuantity3 * coffeePrice - 9.90).toFixed(2)));
      setCoffeeQuantity3(coffeeQuantity3 - 1)
    } else if (data === "Expresso Gelado") {
      setTotalCardPrice(parseFloat((coffeeQuantity4 * coffeePrice - 9.90).toFixed(2)));
      setCoffeeQuantity4(coffeeQuantity4 - 1)
    } else if (data === "Café com Leite") {
      setTotalCardPrice(parseFloat((coffeeQuantity5 * coffeePrice - 9.90).toFixed(2)));
      setCoffeeQuantity5(coffeeQuantity5 - 1)
    } else if (data === "Latte") {
      setTotalCardPrice(parseFloat((coffeeQuantity6 * coffeePrice - 9.90).toFixed(2)));
      setCoffeeQuantity6(coffeeQuantity6 - 1)
    } else if (data === "Capuccino") {
      setTotalCardPrice(parseFloat((coffeeQuantity7 * coffeePrice - 9.90).toFixed(2)));
      setCoffeeQuantity7(coffeeQuantity7 - 1)
    } else if (data === "Macchiato") {
      setTotalCardPrice(parseFloat((coffeeQuantity8 * coffeePrice - 9.90).toFixed(2)));
      setCoffeeQuantity8(coffeeQuantity8 - 1)
    } else if (data === "Mocaccino") {
      setTotalCardPrice(parseFloat((coffeeQuantity9 * coffeePrice - 9.90).toFixed(2)));
      setCoffeeQuantity9(coffeeQuantity9 - 1)
    } else if (data === "Chocolate Quente") {
      setTotalCardPrice(parseFloat((coffeeQuantity10 * coffeePrice - 9.90).toFixed(2)));
      setCoffeeQuantity10(coffeeQuantity10 - 1)
    } else if (data === "Cubano") {
      setTotalCardPrice(parseFloat((coffeeQuantity11 * coffeePrice - 9.90).toFixed(2)));
      setCoffeeQuantity11(coffeeQuantity11 - 1)
    } else if (data === "Havaiano") {
      setTotalCardPrice(parseFloat((coffeeQuantity12 * coffeePrice - 9.90).toFixed(2)));
      setCoffeeQuantity12(coffeeQuantity12 - 1)
    } else if (data === "Árabe") {
      setTotalCardPrice(parseFloat((coffeeQuantity13 * coffeePrice - 9.90).toFixed(2)));
      setCoffeeQuantity13(coffeeQuantity13 - 1)
    } else if (data === "Irlandês") {
      setTotalCardPrice(parseFloat((coffeeQuantity14 * coffeePrice - 9.90).toFixed(2)));
      setCoffeeQuantity14(coffeeQuantity14 - 1)
    }
  }

  function coffeeSelectedAdd() {
    setCoffeeSelectedController("activeCoffee")
    setCoffeeSelectedQuantity(coffeeSelectedQuantity + 1)
  }

  function coffeeSelectedRemove() {
    setCoffeeSelectedQuantity(coffeeSelectedQuantity - 1)
  }

  function createNewCoffeeCard(data: CreateCoffeeCardData) {
    alert("Foi adicionado um item no seu carrinho de compras!")

    const id = String(new Date().getTime())

    coffeeSelectedAdd()
    
    let newCoffeeCard:CreateCoffeeCardData = {
      id: id,
      img: data.img,
      title: data.title,
      quantity: data.quantity,
      total: totalCardPrice,
    }

    setCoffeeCards([...coffeeCards, newCoffeeCard])

    console.log(coffeeCards)
    
    setTotalPrice([...totalPrice, totalCardPrice])
    
    setTotalItemPrice((totalPrice.reduce(
      ( accumulator:number, actualValue:number ) => accumulator + actualValue,
      0)) + totalCardPrice)

    const stateJSON = JSON.stringify(coffeeCards)

    localStorage.setItem('@coffee-delivery-project:coffee-cards-1.0.0', stateJSON)
    
    console.log(totalItemPrice)
    console.log(coffeeCards)
    console.log(totalPrice)
  }

  function addressCapture(data: AddressData) {
    let newAddressCollection:AddressData = {
      street: data.street,
      number: data.number,
      district: data.district,
      city: data.city,
      uf: data.uf,
    }
      setAddressCompleted(newAddressCollection)
      console.log(addressCompleted)
  }

  function paymentSelector(e:ChangeEvent<HTMLButtonElement>) {
    setPaymentSelectorValue(e.target.value)
    console.log(paymentSelectorValue)
    console.log(addressCompleted);
    $activeButton.forEach(function(active){
      active.classList.remove("active");
    });

    if (paymentSelectorValue === "Cartão de crédito") {
      $activeButton.forEach(function(active){
        active.classList.remove("active");
      });
      e.target.classList.add("active")
    }
    else if (paymentSelectorValue === "Cartão de débito") {
      $activeButton.forEach(function(active){
        active.classList.remove("active");
      });
      e.target.classList.add("active")
    }
    else if (paymentSelectorValue === "Dinheiro"){
      $activeButton.forEach(function(active){
        active.classList.remove("active");
      });
      e.target.classList.add("active")
    }
  }

  function deleteCard(cardToDelete: any) {
    setCoffeeCards(cardToDelete);
    setCoffeeSelectedQuantity(coffeeSelectedQuantity - 1)
    if (coffeeSelectedQuantity === 0) {
      setCoffeeSelectedController("notActive")
    }
}


function handleSetTotalItemPrice(handleSelectedPrice:number) {
  setTotalItemPrice(totalItemPrice - handleSelectedPrice);
}

function handleSetTotalItemPricePlus(handleSelectedPrice:number) {
  setTotalItemPrice(totalItemPrice + handleSelectedPrice);
}

function setControllerOff() {
  setCoffeeSelectedQuantity(0);
  setCoffeeSelectedController("notActive");
}

const storedStateAsJSON:any = localStorage.getItem(
  '@coffee-delivery-project:coffee-cards-1.0.0',
)

let ourArray = JSON.parse(storedStateAsJSON);


  return (
    <CoffeeContext.Provider
      value={{
        coffeeQuantity,
        plusCoffeeQuantity,
        minusCoffeeQuantity,
        coffeeSelectedQuantity,
        coffeeSelectedAdd,
        coffeeSelectedRemove,
        coffeeSelectedController,
        paymentSelector,
        paymentSelectorValue,
        createNewCoffeeCard,
        coffeeCards,
        coffeePrice,
        totalPrice,
        totalCardPrice,
        totalItemPrice,
        addressCapture,
        addressCompleted,
        deleteCard,
        handleSetTotalItemPrice,
        handleSetTotalItemPricePlus,
        ourArray,
        setControllerOff,

        coffeeQuantity1,
        coffeeQuantity2,
        coffeeQuantity3,
        coffeeQuantity4,
        coffeeQuantity5,
        coffeeQuantity6,
        coffeeQuantity7,
        coffeeQuantity8,
        coffeeQuantity9,
        coffeeQuantity10,
        coffeeQuantity11,
        coffeeQuantity12,
        coffeeQuantity13,
        coffeeQuantity14,

      }}
    >
      {children}
    </CoffeeContext.Provider>
  )
}

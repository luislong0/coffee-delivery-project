import { useContext } from "react"
import { CoffeeContext } from "../../contexts/CoffeeContext"
import { HistoryCard } from "./HistoryCard"
import { HistoryCoffeesContainer } from "./styles"

export function History() {
    
    const { ourArray } = useContext(CoffeeContext)

    return (
        <HistoryCoffeesContainer>
            {ourArray.map(historyCard => {
                if(historyCard.id){
                    return (
                        <HistoryCard
                        key={historyCard.id}
                        id={historyCard.id}
                        img={historyCard.img} 
                        CoffeeTitle={historyCard.title}
                        total={historyCard.total}
                        quantity={historyCard.quantity}  
                        />
                    )
                }
            })}
        </HistoryCoffeesContainer>
    )
}
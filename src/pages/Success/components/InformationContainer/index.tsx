import { CurrencyDollar } from "phosphor-react";
import { useContext } from "react";
import { CoffeeContext } from "../../../../contexts/CoffeeContext";
import { InformationCards, InformationContent, OrangeBackground, PurpleBackground, YellowBackground } from "./styles";

export function InformationContainer() {
    
    const { paymentSelectorValue, addressCompleted } = useContext(CoffeeContext)



    return(
            <InformationContent>
                    <InformationCards>
                        <PurpleBackground>
                            <CurrencyDollar size={16} />
                        </PurpleBackground>
                        <div>
                            <p>Pagamento na entrega: <span>{`${addressCompleted.street}, ${addressCompleted.number}` }
                            </span></p>
                            <p>{`${addressCompleted.district} - ${addressCompleted.city}, ${addressCompleted.uf}`}</p>
                        </div>
                    </InformationCards>

                    <InformationCards>
                        <YellowBackground>
                            <CurrencyDollar size={16} />
                        </YellowBackground>
                        <div>
                            <p>Previsão de entrega</p>
                            <span>20 min - 30 min </span>
                        </div>
                    </InformationCards>

                    <InformationCards>
                        <OrangeBackground>
                            <CurrencyDollar size={16} />
                        </OrangeBackground>
                        <div>
                            <p>Pagamento na entrega</p>
                            <span>{paymentSelectorValue}</span>
                        </div>
                    </InformationCards>
            </InformationContent>

    )
}
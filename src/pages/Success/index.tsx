import { InformationContainer } from "./components/InformationContainer";
import { InfoPlusIMG, SuccessContainer } from "./styles";
import successImg from "../../assets/successImg.svg"
import { NavLink } from "react-router-dom";
import { Scroll } from "phosphor-react";

export function Success() {
    
    return (
        <SuccessContainer>
            <h1>Uhu! Pedido confirmado</h1>
            <span>Agora é só aguardar que logo o café chegará até você</span>
            <InfoPlusIMG>
                <InformationContainer />
                <img src={successImg} />
            </InfoPlusIMG>


        </SuccessContainer>
    )
}
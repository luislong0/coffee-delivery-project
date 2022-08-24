import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react';
import coffeeImg from '../../../../assets/coffeeImg.svg';
import { GrayDiv, HomeInformationDivWithIcons, HomepageInformation, HomePageInformationContainer, InfoPlusIconBox, OrangeDiv, PurpleDiv, YellowDiv } from './styles';

export function HomeInformation() {
    return (
        <HomePageInformationContainer>
        <HomepageInformation>
                    <h1>Enconte o café perfeito para qualquer hora do dia</h1>
                    <h4>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</h4>
                    <HomeInformationDivWithIcons>
                        <InfoPlusIconBox>
                        <OrangeDiv>
                            <ShoppingCart size={16} weight='bold'/>
                            <span>Compra simples e segura</span>
                        </OrangeDiv>
                        
                        <YellowDiv>
                            <Timer size={16} weight='bold' />
                            <span>Entrega rápida e rastreada</span>
                        </YellowDiv>
                        </InfoPlusIconBox>

                        <InfoPlusIconBox>
                        <GrayDiv>
                            <Package size={16} weight='bold' />
                            <span>Embalagem mantém o café intacto</span>
                        </GrayDiv>

                        <PurpleDiv>
                            <Coffee size={16} weight='bold' />
                            <span>O café chega fresquinho até você</span>
                        </PurpleDiv>
                        </InfoPlusIconBox>
                    </HomeInformationDivWithIcons>
        </HomepageInformation>
            <img src={coffeeImg} alt="" />
        </HomePageInformationContainer>
    )
}
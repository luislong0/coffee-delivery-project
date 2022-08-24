import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";
import { useContext} from "react";
import { CoffeeContext } from "../../../../contexts/CoffeeContext";
import { AddressForm, ButtonsPayment, CheckoutForm, Input10, Input100, Input35, Input50, Input62, Payment, SubmitButton } from "./styles";
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

interface AddressType {
    street: string,
    number: string,
    district: string,
    city: string,
    uf: string,
}

const newCheckFormValidationSchema = zod.object({
    cep: zod.string().min(1, "Informe o CEP"),
    rua: zod.string().min(1, "Informe a rua"),
    numero: zod.string().min(1, "Informe o numero"),
    complemento: zod.string().min(0),
    bairro: zod.string().min(1, "Informe o bairro"),
    cidade: zod.string().min(1, "Informe a cidade"),
    uf: zod.string().min(1, "Informe o estado"),
})

export function CheckForm() {
    const { register, handleSubmit, formState } = useForm({
        resolver: zodResolver(newCheckFormValidationSchema),
    })
    function handleCreateNewAddress(data:any) {
        
        let fullAddress:AddressType = {
            street: data.rua,
            number: data.numero,
            district: data.bairro,
            city: data.cidade,
            uf: data.uf,
        }
        addressCapture(fullAddress);
        console.log(data)
    }
    
    const { paymentSelector, addressCapture } = useContext(CoffeeContext)
    
    return (
        <CheckoutForm>
            <span>Complete seu pedido</span>
            <AddressForm>
                <p><MapPinLine size={22} />Endereço de Entrega</p>
                <span>Informe o endereço onde deseja receber seu pedido</span>
                <form onSubmit={handleSubmit(handleCreateNewAddress)} action="">

                    <Input35 type="text" id="cep" placeholder="CEP" {...register('cep')}/>
                    <div>
                        <Input100  id="rua" placeholder="Rua" {...register('rua')}/>
                    </div>
                    <div>
                        <Input35 type="text" id="numero" placeholder="Número"
                        {...register('numero')}/>

                        <Input62 type="text" id="complemento" placeholder="Complemento (Opcional)" {...register('complemento')}/>
                    </div>
                    <div>
                        <Input35 type="text" id="bairro" placeholder="Bairro" {...register('bairro')}/>

                        <Input50 type="text" id="cidade" placeholder="Cidade" {...register('cidade')}/>
                        <Input10 type="text" id="uf" placeholder="UF" {...register('uf')}/>
                    </div>
                    <SubmitButton type="submit" onClick={() => {
                        alert("Endereço salvo com sucesso!")
                        // if(formState.errors) {
                        //     alert("Alguns campos obrigatórios não foram preenchidos")
                        // }
                    }}>
                            Salvar endereço
                    </SubmitButton>
                </form>
            </AddressForm>
            <Payment>
                <p><CurrencyDollar size={22} /> Pagamento</p>
                <span>O pagamento é feito na entrega. Escolha a forma que deseja pagar</span>
                <ButtonsPayment>
                    <button value="Cartão de crédito" onClick={paymentSelector}>
                        <CreditCard size={16} /> Cartão de crédito
                    </button>
                    <button value="Cartão de débito" onClick={paymentSelector}>
                        <Bank size={16} /> Cartão de débito
                    </button>
                    <button value="Dinheiro" onClick={paymentSelector}>
                        <Money size={16} /> Dinheiro
                    </button>
                </ButtonsPayment>
            </Payment>
        </CheckoutForm>
    )
}


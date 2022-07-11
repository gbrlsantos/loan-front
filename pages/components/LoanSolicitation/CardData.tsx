import { useContext, useState } from "react"

import { ScreenContext } from "../../context/ScreenContext"

import DefaultButton from "../Common/DefaultButton"
import FileInput from "../Common/FileInput"
import TextInput from "../Common/TextInput"

interface ICardDataProps {
  handleClickCardData: Function
}

export default function CardData({handleClickCardData}: ICardDataProps) {
  const { cardData, setCardData } = useContext(ScreenContext)
  const [ cardName, setCardName ] = useState("")
  const [ cardNumber, setCardNumber ] = useState("")
  const [ validityDate, setVailidityDate ] = useState("")
  const [ CVC, setCVC ] = useState("")

  function handleSubmitCardData() {
    handleClickCardData()
    setCardData({
      'cardName': cardName,
      'cardNumber': cardNumber,
      'validityDate': validityDate,
      'CVC': CVC,
    })
  }

  function handleNameCardChange(e: React.FormEvent<HTMLInputElement>) {
    setCardName(e.currentTarget.value)
  }

  function handleCardNumberChange(e: React.FormEvent<HTMLInputElement>) {
    setCardNumber(e.currentTarget.value)
  }

  function handleValidityDataChange(e: React.FormEvent<HTMLInputElement>) {
    setVailidityDate(e.currentTarget.value)
  }

  function handleCVCChange(e: React.FormEvent<HTMLInputElement>) {
    setCVC(e.currentTarget.value)
  }

  return(
    <div className="flex justify-center items-center flex-col mt-24">
      <div className="flex justify-center gap-10">
          <div className="w-1/2">
            <p className="text-primary-color text-center text-lg mb-4">Insira os dados do cartão</p>
            <div className="flex flex-col">
              <TextInput
                placeholder="Nome no cartão"
                onChange={handleNameCardChange}
              />  
              <TextInput
                placeholder="Número do cartão"
                onChange={handleCardNumberChange}
              />  
              <TextInput
                placeholder="Data de validade"
                onChange={handleValidityDataChange}
              />  
              <TextInput
                placeholder="CVC"
                onChange={handleCVCChange}
              />  
            </div>
          </div>
          <div className="w-1/2">
            <p className="text-primary-color text-center text-lg mb-4">Faça o upload dos anexos do cartão</p>
            <div className="flex flex-col">
              <FileInput
                text="Cartão de Crédito (Frente)"
                inputId="front-card"
              />
              <FileInput
                text="Cartão de Crédito (Verso)"
                inputId="back-card"
              />
              <FileInput
                text="Selfie com cartão de crédito"
                inputId="selfie-card"
              />         
            </div>
            <p className="text-primary-color">Atenção: As fotos devem estar legíveis, com todas as informações visíveis do cartão.</p>
          </div>
      </div>
      <DefaultButton
        text="Continuar"
        width="w-[300px]"
        handleClick={handleSubmitCardData}
      />
    </div>
  )
}
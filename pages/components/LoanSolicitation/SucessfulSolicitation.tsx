import { useContext } from "react";
import { Screen, ScreenContext } from "../../context/ScreenContext";

import DefaultButton from "../Common/DefaultButton";

import SucessCard from "./SucessCard";
import SucessCreditCard from "./SucessCreditCard";

interface SucessfulSolicitationProps {
  handleSolicitationValue: Function
}

export default function SucessfulSolicitation({handleSolicitationValue}: SucessfulSolicitationProps) {
  const { cardData, rateTableRow, loanDesiredValue, client, setScreen, solicitation } = useContext(ScreenContext)
  function handleSucessfulSolicitationClick() {
    setScreen(Screen.SolicitationDetail)
  }

  return(
    <div className="flex flex-col items-center justify-center mt-5">
      <h1 className="text-3xl text-primary-color font-bold mb-5">Solicitação Realizada com Sucesso!</h1>
      <p className="text-2xl text-primary-color mb-5">Resumo da Solicitação</p>
      <div className="flex gap-5 w-[1000px]">
        <div className="flex w-full flex-col gap-5">
          <SucessCard
            label={cardData.cardName}
            value={client.phone}
            labelType="default"
            valueType="default"
          />
          <SucessCreditCard
            cardLastNumbers={cardData.cardNumber.slice(cardData.cardNumber.length - 3)}
            validateDate={cardData.validityDate}
          />
          <SucessCard
            label="Valor Desejado"
            value={`R$ ${loanDesiredValue},00`}
            labelType="primary-color"
            valueType="green-color"
          />
        </div>
        <div className="flex w-full flex-col gap-5">
          <SucessCard
            label="Taxa de Juros"
            value={`${rateTableRow.interest}%`}
            labelType="primary-color"
            valueType="secondary-color"
          />
          <SucessCard
            label="Parcelas"
            value={rateTableRow.number}
            labelType="primary-color"
            valueType="secondary-color"
          />
          <SucessCard
            label="Valor da Parcela"
            value={`R$ ${rateTableRow.value}`}
            labelType="primary-color"
            valueType="green-color"
          />
        </div>
      </div>
      <div className="mt-5 flex flex-col justify-center items-center gap-5 w-4/12 mb-10">
        <SucessCard
          label="Valor Total do Empréstimo"
          value={`R$ ${handleSolicitationValue()},00`}
          labelType="primary-color"
          valueType="green-color"
        />
        <DefaultButton
          text="Detalhe da Solicitação"
          width="w-7/12"
          handleClick={handleSucessfulSolicitationClick}
        />
        <span className="text-lg text-primary-color">O CredFica avaliará a solicitação.</span>
      </div>
    </div>
  )
}
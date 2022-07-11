import { useContext } from "react"
import { ScreenContext } from "../../context/ScreenContext"

import IRateTableData from "../../../interfaces/IRateTableData"

import DefaultButton from "../Common/DefaultButton"

import RateTable from "../TaxSimulator/RateTable"
import InfoCard from "./InfoCard"

interface IConcludeLoanProps {
  handleClickConcludeLoan: Function,
  errorSolicitationMsg: boolean,
}

export default function ConcludeLoan({handleClickConcludeLoan, errorSolicitationMsg}: IConcludeLoanProps) {
  const { loanDesiredValue, rateTableRow, allRateTables } = useContext(ScreenContext)
  return(
    <div>
      <div className="flex justify-center items-center gap-5 mt-10">
        <div className="flex flex-col gap-5">
          <InfoCard 
            label="Valor desejado"
            value={`R$ ${loanDesiredValue},00`}
            visible={true}
            isSelect={false}
            color="green"
          />
          <InfoCard 
            label="Parcelas"
            value={ rateTableRow.number }
            visible={true}
            isSelect={true}
            color="gray"
          />
          <div>
          <span>Escolha o tipo de contrato:</span>
          <div className="flex gap-5">
            <DefaultButton
              text="Automático"
              width="w-full"
            />
            <DefaultButton
              text="Manual"
              width="w-full"
            />
          </div>
        </div>
        </div>
        <div className="flex flex-col gap-5">
          <InfoCard 
            label="Valor Total do Empréstimo"
            value={`R$ ${loanDesiredValue},00`}
            visible={true}
            isSelect={false}
            color="green"
          />
          <InfoCard 
            label="Valor da Parcela"
            value={`R$ ${rateTableRow.value},00`}
            visible={true}
            isSelect={true}
            color="gray"
          />
          <DefaultButton
            text="Concluir"
            width="w-full"
            handleClick={handleClickConcludeLoan}
          />
          { 
            errorSolicitationMsg &&
            <p className="uppercase text-center text-red-600 font-bold text-sm mt-3">Erro ao fazer a solicitação, por favor tente novamente.</p>
          }
        </div>
      </div>
      {
        allRateTables.map((el: IRateTableData, index: number) => {
          return <RateTable 
            RateTableData={el}
            key={index}
          />
        })
      }
    </div>
  )
}
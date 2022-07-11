import { useContext } from "react"
import { ScreenContext } from "../../context/ScreenContext"

import DefaultInput from "../Common/DefaultInput"

interface IHandleClickCalculateProps {
  handleClickCalculate: Function,
}

export default function ValueInput({handleClickCalculate}: IHandleClickCalculateProps) {
  const { loanDesiredValue, setLoanDesiredValue } = useContext(ScreenContext)

  function handleLoanValueChange(e: React.FormEvent<HTMLInputElement>) {
    let desiredLoan = e.currentTarget.value
    // e.currentTarget.value = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(Number(desiredLoan))
    if (!isNaN(Number(desiredLoan))) {
      setLoanDesiredValue(e.currentTarget.value)
    }
  }

  return(
    <div className="flex justify-center text-center mt-10">
      <div>
        <span className="text-[40px] font-bold text-primary-color-darker">
          Valor Desejado
        </span>
        <div className="flex gap-4 mt-4">
          <div>
            <DefaultInput
              placeholder="R$0,00" 
              value={loanDesiredValue}
              onChange={handleLoanValueChange}
            />
          </div>
          <div>
            <button onClick={() => handleClickCalculate()} className="bg-secondary-color p-3 w-[100px] font-bold rounded-md text-white">
              Calcular
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
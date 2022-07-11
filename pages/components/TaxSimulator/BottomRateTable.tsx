import { useContext, useState } from "react"
import { Screen, ScreenContext } from "../../context/ScreenContext"

export default function BottomRateTable() {
  const { rateTableRow, setScreen, rateTableName } = useContext(ScreenContext)
  const [emptyRateTableMsg, setEmptyRateTableMsg] = useState(false)

  function handleBottomRateTableClick() {
    if (rateTableName) {
      setEmptyRateTableMsg(false)
      setScreen(Screen.LoanSolicitation)
    }
    else {
      setEmptyRateTableMsg(true)
    }
  }

  return(
    <div>
      {
        emptyRateTableMsg &&
        <p className="uppercase text-center text-red-600 font-bold text-sm mb-3">Erro: Escolha uma das opções acima.</p>
      }
      <div className="w-full text-lg font-bold bg-primary-color-darker text-white h-16 absolute flex gap-10 justify-center items-center">
        <span>Nome: {rateTableName} </span>
        <span>Parcelas: {rateTableRow.number} </span>
        <span>Valor da Parcela: {rateTableRow.full_value} </span>
        <button
          onClick={() => handleBottomRateTableClick()}
          className="bg-secondary-color w-[130px] h-10 font-bold rounded-md text-white text-md">
          Avançar
        </button>
      </div>
    </div>
  )
}
import { useContext } from "react"
import { ScreenContext } from "../../context/ScreenContext"

import DefaultButton from "../Common/DefaultButton"

interface IClientFound {
  handleClickClientFound: Function,
}

export default function ClientFound({handleClickClientFound}: IClientFound) {
  const { client } = useContext(ScreenContext)
  return(
    <div className="flex justify-center">
      <div className="mt-10 p-5 rounded-md flex justify-center flex-col items-center w-[490px] bg-[#eaeff1]">
        <div>
          <h1 className="text-[33px] text-default-font-color">Cliente encontrado:</h1>
        </div>
        <div>
          <span className="text-[33px] text-secondary-color mb-4">{client.cpf}</span>
        </div>
        <div>
          <span className="font-bold text-primary-color-darker text-2xl">{client.name}</span>
        </div>
        <DefaultButton
          text="Solicitar"
          width="w-full"
          handleClick={handleClickClientFound}
        />
      </div>
    </div>
  )
}
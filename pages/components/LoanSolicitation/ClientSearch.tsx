import { useContext } from "react"
import { ScreenContext } from "../../context/ScreenContext"

import DefaultInput from "../Common/DefaultInput"

interface IClientSearch {
  handleClickClientSearch: Function
}

export default function ClientSearch({ handleClickClientSearch }: IClientSearch) {
  const { setClientCpf } = useContext(ScreenContext)

  function handleClientValueChange(e: React.FormEvent<HTMLInputElement>) {
    let searchedClientCpf = e.currentTarget.value
    if (!isNaN(Number(searchedClientCpf))) {
      setClientCpf(searchedClientCpf)
    }
  }

  return(
    <div className="flex justify-center text-center mt-10 flex-col">
      <h1 className="text-[33px] text-primary-color">Busque o Cliente</h1>
      <div className="flex gap-2 justify-center">
        <DefaultInput 
          onChange={handleClientValueChange}
        />
        <button
          onClick={() => handleClickClientSearch()}
          className="bg-primary-color-darker p-3 w-[100px] font-bold rounded-md text-white">Buscar</button>
      </div>
    </div>
  )
}
import DefaultButton from "../Common/DefaultButton"

interface IPickModality {
  handleClickPickModality: Function
}

export default function PickModality({handleClickPickModality}: IPickModality) {
  return(
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-2xl text-primary-color">Escolha a modalidade:</h1>
      <DefaultButton
        text="Cartão de crédito"
        width="w-[300px]"
        handleClick={handleClickPickModality}
      />
      <div className="mt-5">
        <span className="text-lg text-default-font-color">Ou</span>
      </div>
      <DefaultButton
        text="Cartão Consignado"
        width="w-[300px]"
        active={false}
      />
      <div className="text-right w-[300px] text-lg text-default-font-color">
        <span>Em Breve</span>
      </div>
    </div>
  )
}
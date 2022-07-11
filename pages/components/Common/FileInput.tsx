interface FileInputProps {
  text: string,
  inputId: string,
}
export default function FileInput({text, inputId}: FileInputProps) {
  return(
    <div>
      <label
        className="cursor-pointer flex justify-between bg-[#eaeff1] p-3 rounded-md mb-5 h-16 items-center"
        htmlFor={inputId}
      >
        <div className="italic font-bold text-default-font-color">
          {text}
        </div>
        <div className="underline text-default-font-color">
          Adicionar
        </div>
      </label>
      <input id={inputId} className="bg-[#eaeff1] p-3 rounded-md mb-5 h-16 hidden" type="file"></input>
    </div>
  )
}
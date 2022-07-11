import { BsFileEarmarkFill } from "react-icons/bs";

interface IMdFileBox {
  label: string,
  link: string,
}

export default function MdFileBox({label, link}: IMdFileBox) {
  return(
    <div className="bg-[#eaeff1] p-5 w-full text-center max-h-64 h-56 flex flex-col items-center justify-between">
      <h1 className="text-lg text-default-font-color">{label}</h1>
      <div>
        <BsFileEarmarkFill
          className="fill-secondary-color"
          size="6em"
        />
      </div>
      <a className="text-[#2D98B4] underline" href="">Ver Comprovante</a>
    </div>
  )
}
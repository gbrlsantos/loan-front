import { BiCheck } from "react-icons/bi"

interface ISucessCardProps {
  label: string,
  value?: string | number,
  labelType: "default" | "primary-color",
  valueType: "default" | "green-color" | "secondary-color"
}

export default function SucessCard({label, value, labelType, valueType}: ISucessCardProps) {
  return(
    <div className="flex justify-between items-center px-4 h-[70px] w-full bg-[#E8FFE3] font-bold text-default-font-color italic">
      <div className=
        {labelType === "primary-color" ?
         `text-primary-color font-bold italic`
        : ``}
      >
        {label}
      </div>
      <div className=
        {
          valueType === "green-color" ?
          `text-[#31AC2B] font-extrabold text-2xl not-italic` :
          valueType === "secondary-color" ?
          `text-secondary-color font-extrabold text-2xl not-italic`
          : ``
        }
      >
        {value}
      </div>
      <div>
        <BiCheck
          className="fill-primary-color"
          size="3em"
        />
      </div>
    </div>
  )
}
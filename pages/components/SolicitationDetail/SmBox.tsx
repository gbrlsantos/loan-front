interface ISmBoxProps {
  text: string,
  boldText: string
}

export default function SmBox({text, boldText}: ISmBoxProps) {
  return(
    <div className="text-default-font-color text-2xl bg-[#eaeff1] p-5">
      <p>{text} <span className="text-primary-color font-bold">{boldText}</span></p>
    </div>
  )
}
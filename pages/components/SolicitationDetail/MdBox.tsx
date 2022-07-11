interface IMdBoxProps {
  label: string,
  value: string | number,
}

export default function MdBox({label, value}: IMdBoxProps) {
  return(
    <div className="bg-[#eaeff1] p-5 w-full text-center max-h-64 h-56">
      <h1 className="text-lg text-default-font-color">{label}</h1>
      <div className="mt-8">
        <span className="text-2xl text-[#31AC2B] font-bold">{value}</span>
      </div>
    </div>
  )
}
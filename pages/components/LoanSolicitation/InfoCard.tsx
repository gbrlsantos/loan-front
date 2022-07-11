interface InfoCardProps {
  label: string,
  value?: number | string | "",
  visible?: boolean,
  isSelect: boolean,
  color: 'green' | 'gray',
}

export default function InfoCard({label, value, visible, isSelect, color}: InfoCardProps) {
  return (
    <div className={
      `flex w-[370px] justify-between p-3 items-center rounded-md ${visible? "" : "hidden"} ${color === 'green' ? 'bg-[#E8FFE3]' : 'bg-[#eaeff1]'}`
      }>
      <span className="ml-5 text-lg text-primary-color font-bold italic">{label}</span>
      <div className="flex bg-white p-3 w-[210px] justify-between">
        <p className="text-secondary-color font-bold text-lg italic">{value}</p>
        { isSelect &&
        <div className="flex flex-col gap-1 justify-center">
          <img src="../pages/../up_arrow_icon.svg"/>
          <img src="../pages/../down_arrow_icon.svg"/>
        </div>
        }
      </div>
    </div>
  )
}
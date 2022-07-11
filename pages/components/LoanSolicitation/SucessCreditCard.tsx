import { BiCheck } from "react-icons/bi";
import { BsFillCreditCard2BackFill } from "react-icons/bs";

interface ISucessCreditCardProps {
  cardLastNumbers: string,
  validateDate: string,
}

export default function SucessCreditCard({cardLastNumbers, validateDate}: ISucessCreditCardProps) {
  return(
    <div className="flex justify-between items-center px-4 h-[70px] w-full bg-[#E8FFE3] font-bold text-default-font-color italic">
      <div>
        <BsFillCreditCard2BackFill
          className="fill-secondary-color-darker"
          size="3em"
        />
      </div>
      <div>
        {cardLastNumbers}
      </div>
      <div className="text-[#5e5e5e] font-extrabold not-italic cursor-default">
        VISA
      </div>
      <div>
        {validateDate}
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
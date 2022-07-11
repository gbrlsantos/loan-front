import { InputHTMLAttributes } from "react";

export default function DefaultInput(props: InputHTMLAttributes<HTMLInputElement>) {
  return(
    <input
      className="bg-[#eaeff1] p-3 w-96 rounded-md text-center text-2xl" type="text" {...props}
    />
  )
}
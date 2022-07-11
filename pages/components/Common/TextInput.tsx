import { InputHTMLAttributes } from "react";

export default function TextInput(props: InputHTMLAttributes<HTMLInputElement>) {
  return(
    <input 
      className="bg-[#eaeff1] p-3 rounded-md mb-5 h-16 italic font-bold text-default-font-color placeholder-default-font-color"
      type="text"
      {...props}
    />   
  )
}
interface ButtonProps {
  text: string,
  width: string,
  active?: boolean,
  handleClick?: Function,
}

export default function DefaultButton({text, width, active=true, handleClick}: ButtonProps) {
  return(
    <button
      onClick={() => handleClick? handleClick() : ''}
      className={
        `${width} bg-primary-color-darker text-white mt-5 w-full text-2xl h-16 font-bold rounded-md ${active ? "" : "opacity-50"}`
      }>
      {text}
    </button>
  )
}
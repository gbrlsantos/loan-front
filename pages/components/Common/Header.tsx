interface HeaderProps {
  title: string,
}

export default function Header({title}: HeaderProps) {
  return (
    <div>
      <div className="flex mt-8 gap-8 w-[800px] mr-auto ml-auto">
        <div>
          <img src="../pages/../add_icon.svg"/>
        </div>
        <div>
          <img src="../pages/../folders_icon.svg"/>
        </div>
        <div>
          <h1 className="text-primary-color text-[56px] font-bold w-[350px] leading-none">
            {title}
          </h1>
        </div>
      </div>
    </div>
  )
}
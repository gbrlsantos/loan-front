import IInstallment from "../../interfaces/IInstallment"

export interface IRateTableRowProps {
  rateTableRow: IInstallment,
  handleTableRowClick: Function,
  rateTableName: string,
  selected: boolean
}

export default function RateTableRow({ rateTableRow, handleTableRowClick, rateTableName, selected }: IRateTableRowProps) {
  return (
    <tr className={`cursor-pointer ${selected ? `bg-[#fcf4aa]` : ``}`} onClick={(e) => {handleTableRowClick(rateTableRow, rateTableName, e)}}>
      <td className="p-4 text-center text-lg text-default-font-color border border-[#e1e1e1]">
        {rateTableRow.number}
      </td>
      <td className="p-4 text-center text-lg text-default-font-color border border-[#e1e1e1]">
        {rateTableRow.interest}
      </td>
      <td className="p-4 text-center text-lg text-default-font-color border border-[#e1e1e1]">
        {rateTableRow.value}
      </td>
      <td className="p-4 text-center text-lg text-default-font-color border border-[#e1e1e1]">
        {rateTableRow.full_value}
      </td>
      <td className="p-4 text-center text-lg text-default-font-color border border-[#e1e1e1]">
        {rateTableRow.comission}
      </td>
    </tr>
  )
}
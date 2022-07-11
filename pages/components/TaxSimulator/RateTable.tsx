import { useContext } from "react"
import { ScreenContext } from "../../context/ScreenContext"

import IInstallment from "../../../interfaces/IInstallment"
import IRateTableData from "../../../interfaces/IRateTableData"

import RateTableRow from "./RateTableRow"

interface RateTableProps {
  RateTableData: IRateTableData
}

export default function RateTable({RateTableData}: RateTableProps) {
  const { setRateTableRow, setRateTableName, rateTableRow, rateTableName } = useContext(ScreenContext)
  const thisTableName = RateTableData ? RateTableData.name : ''
  function handleTableRowClick(rateTableRow: IInstallment, rateTableName: string, e: React.FormEvent<HTMLInputElement>) {
    setRateTableRow(rateTableRow)
    setRateTableName(rateTableName)
  }

  return (
    <div className="flex justify-center mt-10">
      <table className="table-auto mb-10">
        <thead className="bg-[#f0f0f0] border-x-[#e1e1e1] border-x-[1px]">
          <tr className="text-center">
            <th colSpan={5} className="text-primary-color text-2xl p-5">{thisTableName}</th>
          </tr>
          <tr>
            <th className="pt-3 w-36 h-11 text-lg text-default-font-color border-x-[#e1e1e1] border-x-[1px] border-b-[#e1e1e1] border-b-[1px]">
              Parcela
            </th>
            <th className="pt-3 w-52 h-11 text-lg text-default-font-color border-x-[#e1e1e1] border-x-[1px] border-b-[#e1e1e1] border-b-[1px]">
              Juros da Parcela
            </th>
            <th className="pt-3 w-52 h-11 text-lg text-default-font-color border-x-[#e1e1e1] border-x-[1px] border-b-[#e1e1e1] border-b-[1px]">
              Valor Parcela
            </th>
            <th className="pt-3 w-52 h-11 text-lg text-default-font-color border-x-[#e1e1e1] border-x-[1px] border-b-[#e1e1e1] border-b-[1px]">
              Valor Total
            </th>
            <th className="pt-3 w-52 h-11 text-lg text-default-font-color border-x-[#e1e1e1] border-x-[1px] border-b-[#e1e1e1] border-b-[1px]">
              Comissão Parceiro
            </th>
          </tr>
        </thead>
        <tbody>
          {
            RateTableData && RateTableData.installment &&
            RateTableData.installment.map((el: IInstallment, index: number) => {
              return <RateTableRow
                rateTableName={thisTableName}
                rateTableRow={el}
                key={index}
                handleTableRowClick={handleTableRowClick}
                selected={thisTableName + el.id === rateTableName + rateTableRow.id}
              />
            })
          }
        </tbody>
      </table>
    </div>
  )
}
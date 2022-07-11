import { BASE_URL_SERVER } from '../services'

import type { NextPage } from 'next'
import Head from 'next/head'

import IRateTableData from '../interfaces/IRateTableData'

import { useContext, useState } from 'react'
import { ScreenContext } from './context/ScreenContext'

import Header from './components/Common/Header'
import BottomRateTable from './components/TaxSimulator/BottomRateTable'
import RateTable from './components/TaxSimulator/RateTable'
import ValueInput from './components/TaxSimulator/ValueInput'


const TaxSimulator: NextPage = () => {
  const [rateTableVisibility, setRateTableVisibility] = useState(false)
  const [emptyLoanMsg, setEmptyLoanMsg] = useState(false)
  const { allRateTables, setAllRateTables, loanDesiredValue } = useContext(ScreenContext)
  const [ loanErrorMsg, setLoanErrorMsg ] = useState(false)

  async function getRateTables() {
    const response = await fetch(`${BASE_URL_SERVER}/ratetables/`);
    const rateTables = await response.json();
    setAllRateTables(rateTables)
  }

  function handleClickCalculate() {
    if (loanDesiredValue) {
      const isValidLoan = Number(loanDesiredValue) > 300 && Number(loanDesiredValue) < 10000
      if (isValidLoan) {
        setLoanErrorMsg(false)
        setRateTableVisibility(true)
        getRateTables()
      } else {
        setLoanErrorMsg(true)
        setRateTableVisibility(false)
      }
      setEmptyLoanMsg(false)
    }
    else {
      setEmptyLoanMsg(true)
      setRateTableVisibility(false)
    } 
  }

  return (
    <div>
      <Head>
        <title>Simulação de Taxas</title>
      </Head>
      <Header
        title='Simulação de taxas'
      />
      <ValueInput 
        handleClickCalculate={handleClickCalculate}
      />
      {
        loanErrorMsg &&
        <p className="uppercase text-center text-red-600 font-bold text-sm mt-3">Erro: Insira um valor entre R$300,00 e R$10.000,00</p>
      }
      {
        emptyLoanMsg &&
        <p className="uppercase text-center text-red-600 font-bold text-sm mt-3">Erro: Insira um valor válido</p>
      }
      {
        rateTableVisibility &&
        <>
        {
          allRateTables.map((el: IRateTableData, index: number) => {
            return <RateTable 
              RateTableData={el}
              key={index}
            />
          })
        }
          <BottomRateTable />
        </>
      }
    </div>
  )
}

export default TaxSimulator

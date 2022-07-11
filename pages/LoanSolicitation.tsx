
import type { NextPage } from 'next'
import Head from 'next/head'

import { BASE_URL_SERVER } from '../services'

import ISolicitation from '../interfaces/ISolicitation'

import { useContext, useState } from 'react'
import { ScreenContext } from './context/ScreenContext'

import Header from './components/Common/Header'

import CardData from './components/LoanSolicitation/CardData'
import ClientFound from './components/LoanSolicitation/ClientFound'
import ClientSearch from './components/LoanSolicitation/ClientSearch'
import ConcludeLoan from './components/LoanSolicitation/ConcludeLoan'
import InfoCard from './components/LoanSolicitation/InfoCard'
import PickModality from './components/LoanSolicitation/PickModality'
import SucessfulSolicitation from './components/LoanSolicitation/SucessfulSolicitation'


const LoanSolicitation: NextPage = () => {
  const { setClient, rateTableName, clientCpf, client, rateTableRow, cardData, loanDesiredValue, solicitation, setSolicitation } = useContext(ScreenContext)

  const [clientFoundVisibility, setClientFoundVisibility] = useState(false)
  const [clientErrorMsg, setClientErrorMsg] = useState(false)

  const [cardDataVisibility, setCardDataVisibility] = useState(false)
  const [pickModalityVisibility, setPickModalityVisibility] = useState(false)
  const [concludeLoanVisibility, setConcludeLoanVisibility] = useState(false)
  const [infoCardVisibility, setInfoCardVisibility] = useState(false)
  const [sucessfulSolicitation, setSucessfulSolicitation] = useState(false)
  const [errorSolicitationMsg, setErrorSolicitationMsg] = useState(false)

  async function getClientByCPF() {
    const response = await fetch(`${BASE_URL_SERVER}/clients/?cpf=${clientCpf}`, {
      method: "GET",
    });
    const clientFound = await response.json();
    if (clientFound.length !== 0) {
      setClient(clientFound[0])
      setClientFoundVisibility(true)
      setClientErrorMsg(false)
    } else {
      setClientErrorMsg(true)
    }
  }

  function handleClickClientSearch() {
    getClientByCPF()
  }

  function handleClickClientFound() {
    setCardDataVisibility(true)
  }

  function handleClickCardData() {
    setPickModalityVisibility(true)
  }

  function handleClickPickModality() {
    setConcludeLoanVisibility(true)
    setInfoCardVisibility(true)
  }

  function handleSolicitationValue(): string {
    const totalLoan = Number(rateTableRow.value) * Number(rateTableRow.number)
    return String(totalLoan)
  }

  function handleClickConcludeLoan() {
    let newSolicitation = {
      'client': client.id,
      'installment': rateTableRow.id,
      'card_number': Number(cardData.cardNumber),
      'desired_value': Number(loanDesiredValue),
      'total_loan': Number(handleSolicitationValue())
    }
    postSolicitation(newSolicitation)
    
  }

  async function postSolicitation(body: ISolicitation) {
    const response = await fetch(`${BASE_URL_SERVER}/solicitations/`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
      }
    });
    
    if (response.status >= 200 && response.status < 300) {
      setSolicitation(body)
      setErrorSolicitationMsg(false)
      setSucessfulSolicitation(true)
    }

    else {
      setErrorSolicitationMsg(true)
      setSucessfulSolicitation(false)
    }
  }

  return (
    <div>
      <Head>
        <title>Simulação de Taxas</title>
      </Head>
      <div className='flex justify-center items-center'>
        <Header
          title='Solicitar Empréstimo'
        />
        <InfoCard
          visible={infoCardVisibility}
          isSelect={true}
          color="gray"
          label="Tabela"
          value={rateTableName}
        />
      </div>
      {
        !cardDataVisibility &&
        <ClientSearch
          handleClickClientSearch={handleClickClientSearch}
        />
      }
      {
        clientFoundVisibility && !cardDataVisibility &&
        <ClientFound
          handleClickClientFound={handleClickClientFound}
        />
      }
      {
        clientErrorMsg &&
        <p className="uppercase text-center text-red-600 font-bold text-sm mt-3">Cliente não encontrado, tente novamente.</p>
      }
      {
        cardDataVisibility && !pickModalityVisibility &&
        <CardData
          handleClickCardData={handleClickCardData}
        />
      }
      {
        pickModalityVisibility && !concludeLoanVisibility &&
        <PickModality
          handleClickPickModality={handleClickPickModality}
        />
      }
      {
        concludeLoanVisibility && !sucessfulSolicitation &&
        <ConcludeLoan
          errorSolicitationMsg={errorSolicitationMsg}
          handleClickConcludeLoan={handleClickConcludeLoan}
        />
      }
      {
        sucessfulSolicitation &&
        <SucessfulSolicitation
          handleSolicitationValue={handleSolicitationValue}
        />
      }
    </div>
  )
}

export default LoanSolicitation

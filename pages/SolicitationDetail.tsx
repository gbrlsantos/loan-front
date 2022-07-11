import type { NextPage } from 'next'
import { useContext } from 'react'

import Head from 'next/head'

import Header from './components/Common/Header'
import MdBox from './components/SolicitationDetail/MdBox'
import MdFileBox from './components/SolicitationDetail/MdFileBox'
import SmBox from './components/SolicitationDetail/SmBox'

import { ScreenContext } from './context/ScreenContext'

import { IoAlertCircle, IoCheckmarkCircleSharp } from "react-icons/io5"

const SolicitationDetail: NextPage = () => {
  const { cardData, rateTableRow, rateTableName, client, solicitation } = useContext(ScreenContext)
  return (
    <div>
      <Head>
        <title>Simulação de Taxas</title>
      </Head>
      <Header
        title='Detalhes da Solicitação'
      />
      <div className="flex gap-5 justify-center mt-10">
        <div>
          <div className="mb-5">
            <SmBox
              text="Solicitação gerada por"
              boldText="Sistema Credfica"
            />
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex gap-5">
            <MdBox 
              label="Valor total"
              value={solicitation.total_loan}
            />
            <MdBox 
              label="Valor a depositar"
              value={solicitation.total_loan}
            />
            </div>

            <div className="flex gap-5">
            <MdFileBox 
              label="Frente do Cartão"
              link=""
            />
            <MdFileBox
              label="Verso do Cartão"
              link=""
            />
            </div>

            <div className="w-1/2">
              <MdFileBox 
                label="Selfie com o Cartão"
                link=""
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 w-4/12">
          <SmBox 
            text="Fluxo da Solicitação: "
            boldText="Manual"
          />
          <div className="bg-[#eaeff1] p-5 text-default-font-color leading-10 text-lg">
            <h1>Modalidade:</h1>
            <p className="text-center font-bold italic">
              <h2 className="text-xl">Cartão de Crédito</h2>
              <p>Número do cartão: {solicitation.card_number} </p>
              <div className="flex justify-around">
                <p>Validade: {cardData.validityDate}</p>
                <p>CVC: {cardData.CVC}</p>
              </div>
              <p>{rateTableRow.number} parcelas de: <span className="text-[#31AC2B]">{rateTableRow.value}</span></p>
              <p>Tabela: {rateTableName}</p>
            </p>
          </div>
          <div className="bg-[#eaeff1] p-5 text-default-font-color leading-8">
            <h1>Informações do Cliente:</h1>
            <div className="font-bold italic">
              <p>Nome: {client.name} </p>
              <p>CPF: {client.cpf}</p>
              <p>Agência: </p>
              <p>Banco: {client.bank.label}</p>
              <p>Tipo de conta: {client.bank.account_type_label}</p>
              <p>Número da conta: {client.bank.account_number}</p>
            </div>
          </div>
          <div className="bg-[#E8F3F4] p-5 text-default-font-color leading-8 mb-20 border-2 border-dashed border-opacity-50 border-primary-color-darker">
            <h1>Informações Gerais:</h1>
            <p className="font-bold italic text-center">
              Data: 10/07/2022
            </p>
            <button className="flex gap-3 justify-center items-center bg-secondary-color text-white mt-5 w-full text-2xl h-12 font-bold rounded-md">
              <IoAlertCircle
                color='white'
                size='1.5em'
              />
              <div>
                Aguardando
              </div>
            </button>
            <div className="flex gap-5">
              <button className="flex gap-3 justify-center items-center bg-primary-color text-white mt-5 w-full text-xl h-12 font-bold rounded-md">
                <IoCheckmarkCircleSharp
                  color="white"
                  size="1.5em"
                />
                <div>
                  Pré Aprovar
                </div>
              </button>
              <button className="flex gap-3 justify-center items-center bg-[#BC3434] text-white mt-5 w-full text-xl h-12 font-bold rounded-md">
                <IoAlertCircle
                  color='white'
                  size='2em'
                />
                <div>
                  Reprovar
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SolicitationDetail

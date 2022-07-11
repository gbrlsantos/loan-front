import React, { createContext, ReactNode, useState } from "react";
import IRateTableData from "../interfaces/IRateTableData";
import IInstallment from "../interfaces/IInstallment";
import ICardData from "../interfaces/ICardData";
import IClient from "../interfaces/IClient";
import ISolicitation from "../interfaces/ISolicitation";

export enum Screen {
  TaxSimulator = 0,
  LoanSolicitation = 1,
  SolicitationDetail = 3
}

interface ScreenContextProps {
  children: ReactNode
}

interface ScreenContextType {
  screen: Screen,
  setScreen: (screenNumber: Screen) => void,
  loanDesiredValue?: string | '',
  setLoanDesiredValue: (value: string) => void,
  rateTableRow: IInstallment,
  setRateTableRow: (rateTableRow: IInstallment) => void,
  cardData: ICardData,
  setCardData: (cardData: ICardData) => void,
  rateTableName: string,
  setRateTableName: (rateTableName: string) => void,
  allRateTables: IRateTableData[],
  setAllRateTables: (allRateTables: IRateTableData[]) => void,
  clientCpf: string,
  setClientCpf: (client: string) => void,
  client: IClient,
  setClient: (client: IClient) => void,
  solicitation: ISolicitation,
  setSolicitation: (solicitation: ISolicitation) => void,
}

const initialValue: ScreenContextType = {
  screen: Screen.TaxSimulator,
  setScreen: () => {},
  loanDesiredValue: '',
  setLoanDesiredValue: () => {},
  rateTableRow: {
    'id': null,
    'number': '',
    'interest': '',
    'value': '',
    'full_value': 0,
    'comission': 0,
  },
  setRateTableRow: () => {},
  cardData: {
    'cardName': '',
    'cardNumber': '',
    'validityDate': '',
    'CVC': ''
  },
  setCardData: () => {},
  rateTableName: '',
  setRateTableName: () => {},
  allRateTables: [],
  setAllRateTables: () => {},
  clientCpf: '',
  setClientCpf: () => {},
  client: {
    id: null,
    name: '',
    bank: {
      id: 0,
      account_number: 0,
      account_type_label: '',
      label: '',
    },
    phone: 0,
    cpf: 0,
  },
  setClient: () => {},
  solicitation: {
    client: null,
    installment: null,
    card_number: '',
    desired_value: '',
    total_loan: ''
  },
  setSolicitation: () => {}
}

export const ScreenContext = createContext<ScreenContextType>(initialValue);

export default function ScreenProvider({children}: ScreenContextProps) {
  const [screen, setScreen] = useState<Screen>(initialValue.screen);

  const [loanDesiredValue, setLoanDesiredValue] = useState(initialValue.loanDesiredValue)

  const [cardData, setCardData] = useState(initialValue.cardData)

  const [rateTableRow, setRateTableRow] = useState(initialValue.rateTableRow)
  const [rateTableName, setRateTableName] = useState(initialValue.rateTableName)
  const [ allRateTables, setAllRateTables ] = useState(initialValue.allRateTables)

  const [ clientCpf, setClientCpf ] = useState(initialValue.clientCpf)
  const [ client, setClient ] = useState(initialValue.client)

  const [ solicitation, setSolicitation ] = useState(initialValue.solicitation)

  return <ScreenContext.Provider
    value={{
      screen,
      setScreen,
      loanDesiredValue,
      setLoanDesiredValue,
      rateTableRow,
      setRateTableRow,
      cardData,
      setCardData,
      rateTableName,
      setRateTableName,
      allRateTables,
      setAllRateTables,
      clientCpf,
      setClientCpf,
      client,
      setClient,
      solicitation,
      setSolicitation
    }}>
    {children}
  </ScreenContext.Provider>
}
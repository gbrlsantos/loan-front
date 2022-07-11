import { useContext } from "react";
import { Screen, ScreenContext } from "./context/ScreenContext";

import LoanSolicitation from "./LoanSolicitation";
import SolicitationDetail from "./SolicitationDetail";
import TaxSimulator from "./TaxSimulator";

export default function Screens() {
  const { screen } = useContext(ScreenContext)

  return(
    <>
    { 
      screen === Screen.TaxSimulator &&
      <TaxSimulator /> 
    }
    { 
      screen === Screen.LoanSolicitation &&
      <LoanSolicitation /> 
    }
    {
      screen === Screen.SolicitationDetail &&
      <SolicitationDetail />
    }
    </>
  )
}
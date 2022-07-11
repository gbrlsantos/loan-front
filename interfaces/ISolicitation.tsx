import IClient from "./IClient";
import IInstallment from "./IInstallment";

export default interface ISolicitation {
  client: number | null,
  installment: number | null,
  card_number: string | number,
  desired_value: string | number,
  total_loan: string | number,
}
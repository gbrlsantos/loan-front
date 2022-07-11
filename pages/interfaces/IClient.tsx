import IBank from "./IBank";

export default interface IClient {
  id: number | null,
  name: string,
  bank: IBank,
  cpf: number,
  phone: number,
}
export default interface IInstallment {
  id: number | null,
  number: number | string,
  interest: number | string,
  value: number | string,
  full_value: number | string,
  comission: number | string,
}
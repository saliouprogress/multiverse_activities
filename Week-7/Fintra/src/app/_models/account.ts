export interface Account {
  id: number;
  name: string;
  type: string;
  issuer: string;
  issuerType: string;
  expirationDate: string;
  creditLimit: number;
  availableCredit: number;
  currentAPR: number
}
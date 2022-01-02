import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Account } from '../_models/account';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const accounts = [
      {   id:    11, 
          name: 'Chase Checking', 
          type: "checking",
          issuer: 'Chase Bank',
          issuerType: 'Finanical Institution',
          expirationDate: 'string',
          creditLimit: 'number',
          availableCredit: 'number',
          currentAPR: 'number',
      },
      {   id:   12, 
          name: 'Capital One Card',
          type: 'Credit',
          issuer: 'Chase Bank',
          issuerType: 'Finanical Institution',
          expirationDate: 'string',
          creditLimit: 'number',
          availableCredit: 'number',
          currentAPR: 'number',
      },
      {   id:   13, 
          name: 'TD Bank',
          type: 'Personal Loan',
          issuer: 'Chase Bank',
          issuerType: 'Finanical Institution',
          expirationDate: 'string',
          creditLimit: 'number',
          availableCredit: 'number',
          currentAPR: 'number', 
      },
      {   id:   14, 
          name: 'Blue Cash Card', 
          type: 'Credit',
          issuer: 'American Express',
          issuerType: 'Finanical Institution',
          expirationDate: 'string',
          creditLimit: 'number',
          availableCredit: 'number',
          currentAPR: 'number',
      },
      {   id:   15, 
          name: 'Magneta',
          type: 'Personal Loan',
          issuer: 'Chase Bank',
          issuerType: 'Finanical Institution',
          expirationDate: 'string',
          creditLimit: 'number',
          availableCredit: 'number',
          currentAPR: 'number', 
      },
      {   id:   16, 
          name: 'RubberMan',
          type: 'Personal Loan',
          issuer: 'Chase Bank',
          issuerType: 'Finanical Institution',
          expirationDate: 'string',
          creditLimit: 'number',
          availableCredit: 'number',
          currentAPR: 'number', 
      },
      {   id:   17, 
          name: 'Dynama',
          type: 'Personal Loan',
          issuer: 'Chase Bank',
          issuerType: 'Finanical Institution' 
      },
      {   id:   18, 
          name: 'Dr IQ',
          type: 'Personal Loan',
          issuer: 'Chase Bank',
          issuerType: 'Finanical Institution',
          expirationDate: 'string',
          creditLimit: 'number',
          availableCredit: 'number',
          currentAPR: 'number', 
      },
      {   id:   19, 
          name: 'Magma',
          type: 'Personal Loan',
          issuer: 'Chase Bank',
          issuerType: 'Finanical Institution',
          expirationDate: 'string',
          creditLimit: 'number',
          availableCredit: 'number',
          currentAPR: 'number', 
      },
      {   id:   20, 
          name: 'Tornado',
          type: 'Personal Loan',
          issuer: 'Chase Bank',
          issuerType: 'Finanical Institution',
          expirationDate: 'string',
          creditLimit: 'number',
          availableCredit: 'number',
          currentAPR: 'number', 
      }
    ];
    return {accounts};
  }

  // Overrides the genId method to ensure that a account always has an id.
  // If the accounts array is empty,
  // the method below returns the initial number (11).
  // if the accounts array is not empty, the method below returns the highest
  // account id + 1.
  genId(accounts: Account[]): number {
    return accounts.length > 0 ? Math.max(...accounts.map(account => account.id)) + 1 : 11;
  }
}

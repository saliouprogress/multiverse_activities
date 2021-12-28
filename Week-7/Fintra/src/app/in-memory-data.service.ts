import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Account } from './account';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const accounts = [
      {   id:    11, 
        name: 'Dr Nice', 
        type: "checking"
    },
    {   id:   12, 
        name: 'Narco',
        type: 'credit' 
    },
    {   id:   13, 
        name: 'Bombasto',
        type: 'Personal Loan' 
    },
    {   id:   14, 
        name: 'Celeritas', 
        type: 'Personal Loan'
    },
    {   id:   15, 
        name: 'Magneta',
        type: 'Personal Loan' 
    },
    {   id:   16, 
        name: 'RubberMan',
        type: 'Personal Loan' 
    },
    {   id:   17, 
        name: 'Dynama',
        type: 'Personal Loan' 
    },
    {   id:   18, 
        name: 'Dr IQ',
        type: 'Personal Loan' 
    },
    {   id:   19, 
        name: 'Magma',
        type: 'Personal Loan' 
    },
    {   id:   20, 
        name: 'Tornado',
        type: 'Personal Loan' 
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

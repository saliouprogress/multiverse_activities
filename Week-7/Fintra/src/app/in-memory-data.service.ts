import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Account } from './account';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const accounts = [
      { id: 11, name: 'Dr Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
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

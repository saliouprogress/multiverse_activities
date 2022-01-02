import { Component, OnInit } from '@angular/core';

import { Account } from '../_models/account';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {
  accounts: Account[] = [];

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.getAccounts();
  }

  getAccounts(): void {
    this.accountService.getAccounts()
    .subscribe(accounts => this.accounts = accounts);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.accountService.addAccount({ name } as Account)
      .subscribe(account => {
        this.accounts.push(account);
      });
  }

  delete(account: Account): void {
    this.accounts = this.accounts.filter(h => h !== account);
    this.accountService.deleteAccount(account.id).subscribe();
  }

}

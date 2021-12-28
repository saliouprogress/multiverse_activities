import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Account } from '../account';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: [ './account-detail.component.css' ]
})
export class AccountDetailComponent implements OnInit {
  account: Account | undefined;

  constructor(
    private route: ActivatedRoute,
    private accountService: AccountService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getAccount();
  }

  getAccount(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.accountService.getAccount(id)
      .subscribe(account => this.account = account);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.account) {
      this.accountService.updateAccount(this.account)
        .subscribe(() => this.goBack());
    }
  }
}

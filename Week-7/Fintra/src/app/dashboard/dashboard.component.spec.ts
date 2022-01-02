import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

import { AccountSearchComponent } from '../account-search/account-search.component';
import { AccountService } from '../_services/account.service';
import { ACCOUNTS } from '../mock-logins';

import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let accountService;
  let getAccountsSpy: jasmine.Spy;

  beforeEach(waitForAsync(() => {
    accountService = jasmine.createSpyObj('AccountService', ['getAccounts']);
    getAccountsSpy = accountService.getAccounts.and.returnValue(of(ACCOUNTS));
    TestBed
        .configureTestingModule({
          declarations: [DashboardComponent, AccountSearchComponent],
          imports: [RouterTestingModule.withRoutes([])],
          providers: [{provide: AccountService, useValue: accountService}]
        })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should display "Top Accounts" as headline', () => {
    expect(fixture.nativeElement.querySelector('h2').textContent).toEqual('Top Accounts');
  });

  it('should call accountService', waitForAsync(() => {
       expect(getAccountsSpy.calls.any()).toBe(true);
     }));

  it('should display 4 links', waitForAsync(() => {
       expect(fixture.nativeElement.querySelectorAll('a').length).toEqual(4);
     }));
});

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Account } from '../_models/account';
import { MessageService } from './message.service';


@Injectable({ providedIn: 'root' })
export class AccountService {

  private accountsUrl = 'api/accounts';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** GET accounts from the server */
  getAccounts(): Observable<Account[]> {
    return this.http.get<Account[]>(this.accountsUrl)
      .pipe(
        tap(_ => this.log('fetched accounts')),
        catchError(this.handleError<Account[]>('getAccounts', []))
      );
  }

  /** GET account by id. Return `undefined` when id not found */
  getAccountNo404<Data>(id: number): Observable<Account> {
    const url = `${this.accountsUrl}/?id=${id}`;
    return this.http.get<Account[]>(url)
      .pipe(
        map(accounts => accounts[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} account id=${id}`);
        }),
        catchError(this.handleError<Account>(`getAccount id=${id}`))
      );
  }

  /** GET account by id. Will 404 if id not found */
  getAccount(id: number): Observable<Account> {
    const url = `${this.accountsUrl}/${id}`;
    return this.http.get<Account>(url).pipe(
      tap(_ => this.log(`fetched account id=${id}`)),
      catchError(this.handleError<Account>(`getAccount id=${id}`))
    );
  }

  /* GET accounts whose name contains search term */
  searchAccounts(term: string): Observable<Account[]> {
    if (!term.trim()) {
      // if not search term, return empty account array.
      return of([]);
    }
    return this.http.get<Account[]>(`${this.accountsUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
         this.log(`found accounts matching "${term}"`) :
         this.log(`no accounts matching "${term}"`)),
      catchError(this.handleError<Account[]>('searchAccounts', []))
    );
  }

  //////// Save methods //////////

  /** POST: add a new account to the server */
  addAccount(account: Account): Observable<Account> {
    return this.http.post<Account>(this.accountsUrl, account, this.httpOptions).pipe(
      tap((newAccount: Account) => this.log(`added account w/ id=${newAccount.id}`)),
      catchError(this.handleError<Account>('addAccount'))
    );
  }

  /** DELETE: delete the account from the server */
  deleteAccount(id: number): Observable<Account> {
    const url = `${this.accountsUrl}/${id}`;

    return this.http.delete<Account>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted account id=${id}`)),
      catchError(this.handleError<Account>('deleteAccount'))
    );
  }

  /** PUT: update the account on the server */
  updateAccount(account: Account): Observable<any> {
    return this.http.put(this.accountsUrl, account, this.httpOptions).pipe(
      tap(_ => this.log(`updated account id=${account.id}`)),
      catchError(this.handleError<any>('updateAccount'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a AccountService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`AccountService: ${message}`);
  }
}

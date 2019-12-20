import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  public getCommits() {
    return this.httpClient.get('https://api.github.com/repos/microsoft/vscode/commits');
  }
}

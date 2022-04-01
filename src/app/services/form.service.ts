import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  private url: any = 'https://opentdb.com'

  constructor(private http: HttpClient) { }

  getSurveyForm() {
    return this.http.get(this.url + '/api.php?amount=10&category=28&type=multiple')
  }
}

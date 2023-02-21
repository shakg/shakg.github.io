import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  /**
   * # API has the following endpoints
   * 
   * get   current_weight  = returns : number 
   * 
   * post  fill{
   *           weight : number 
   *           }
   * 
   * post  config{
   *           automatic : boolean
   *           }
   * 
   * // class Fill{
   *    date    : String | Date
   *    time    : String | Time
   *    percent : number 
   * }
   * get   last_fills = returns : Array<Fill>
   * 
   */
  constructor() { }
}

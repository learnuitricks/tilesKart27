import { Injectable } from '@angular/core';
import { ITile } from '../interfaces/itile';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class TilesService {

  private tilesURL:string = 'http://demo5911200.mockable.io/tiles'; 
  constructor(private httpClient:HttpClient) { }

  getTiles(): Observable<Array<ITile>>{
    return this.httpClient.get<Array<ITile>>(this.tilesURL);
  }

  getTileDetails(tileId:number):Observable<ITile>{
    return this.httpClient.get<ITile>(this.tilesURL+`/${tileId}`);
  }
}
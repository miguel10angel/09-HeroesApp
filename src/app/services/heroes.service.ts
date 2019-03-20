import { Injectable } from '@angular/core';
import { Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Http, Headers } from '@angular/http';
import { Heroe } from '../interfaces/heroe.interface';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

    heroesURL:string="https://heroesap-a583e.firebaseio.com/heroes.json";
    heroeURL:string="https://heroesap-a583e.firebaseio.com/heroes";


  constructor( private http:Http) { }

  nuevoHeroe( heroe:Heroe ){

      let body=JSON.stringify( heroe );
      let headers = new Headers({
          'Content-Type':'application/json'
      });


      return this.http.post( this.heroesURL, body, { headers })
      .map( res=>{
          console.log(res.json());
          return res.json();
      })
  }


  actualizarHeroe( heroe:Heroe, key$:string ){

      let body=JSON.stringify( heroe );
      let headers = new Headers({
          'Content-Type':'application/json'
      });

      let url=`${this.heroeURL}/${ key$ }.json`

      return this.http.put( url, body, { headers })
      .map( res=>{
          console.log(res.json());
          return res.json();
      })
  }

  getHeroe(key$:string){
      let url=`${ this.heroeURL }/${ key$ }.json`;
      return this.http.get( url ).map( res=>res.json());
  }

  getHeroes(){

      return this.http.get( this.heroesURL ).map( res=>res.json());
  }

  borrarHeroe( key$:string ){
      let url=`${ this.heroeURL }/${ key$}.json`;
      return this.http.delete(url)
        .map(res=>res.json())

  }
}

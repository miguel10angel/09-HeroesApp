import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

    heroes:any[]=[];
    loading:Boolean = true;
    constructor( private heroesService:HeroesService) {
        this.heroesService.getHeroes().subscribe(
            heroes=>{
                this.heroes= heroes;
                this.loading = false;
                /*setTimeout(()=>{
                    this.loading = false;
                    this.heroes= heroes;

                },3000)*/
            }
        )
     }



  ngOnInit() {
  }

  eliminar( key$:string){
      this.heroesService.borrarHeroe(key$)
      .subscribe( respuesta=>{
          if (respuesta) {
              console.error(respuesta);
          }else{
              //todo bien
              delete this.heroes[key$];
          }

      })
  }

}

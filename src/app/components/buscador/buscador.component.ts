import {HeroesService} from './../../services/heroes.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styles: [],
})
export class BuscadorComponent implements OnInit {
  heroes: any[] = [];
  termino: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private heroesService: HeroesService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.termino = params['termino'];
      this.heroes = this.heroesService.buscarHeroes(params['termino']);
    });
  }

  volverHeroes() {
    this.router.navigate(['/heroes']);
  }
}

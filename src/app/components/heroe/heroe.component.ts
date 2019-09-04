import {HeroesService} from './../../services/heroes.service';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [],
})
export class HeroeComponent implements OnInit {
  heroe: any = {};

  constructor(
    private route: ActivatedRoute,
    private heroesService: HeroesService
  ) {
    this.route.params.subscribe(
      params => (this.heroe = this.heroesService.getHeroe(params['id']))
    );
  }

  ngOnInit() {}
}

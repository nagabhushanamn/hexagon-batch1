import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from './hero';
import { HeroService } from './hero.service'

@Component({
  selector: 'my-heroes',
  template: `

    <div>
      <label>Hero name:</label> <input #heroName />
      <button (click)="add(heroName.value); heroName.value=''">Add</button>
    </div>

    <h4> Heroes </h4>
    <ul class="list-group">
      <li *ngFor="let hero of heroes" class="list-group-item" [class.active]="hero===selectedHero" (click)="onSelect(hero)">
        <span class="">{{hero.id}}</span> - {{hero.name}}
        
      </li>
    </ul>

    <!-- <my-hero-detail [hero]="selectedHero"></my-hero-detail> -->

    <div *ngIf="selectedHero">
      <h2>
        {{selectedHero.name | uppercase}} is my hero
      </h2>
      <button (click)="gotoDetail()">View Details</button>
    </div>
  `,
  providers: [HeroService]
})
export class HeroesComponent {

  title = '';
  selectedHero: Hero;
  heroes: Hero[];

  constructor(
    private router: Router,
    private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes() {
    //this.heroes = this.heroService.getHeroes();
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.create(name)
      .then(hero => {
        this.heroes.push(hero);
        this.selectedHero = null;
      });
  }

  delete(hero: Hero): void {
    this.heroService
      .delete(hero.id)
      .then(() => {
        this.heroes = this.heroes.filter(h => h !== hero);
        if (this.selectedHero === hero) { this.selectedHero = null; }
      });
  }

}

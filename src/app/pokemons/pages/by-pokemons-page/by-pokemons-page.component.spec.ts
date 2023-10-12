import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByPokemonsPageComponent } from './by-pokemons-page.component';

describe('ByPokemonsPageComponent', () => {
  let component: ByPokemonsPageComponent;
  let fixture: ComponentFixture<ByPokemonsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ByPokemonsPageComponent]
    });
    fixture = TestBed.createComponent(ByPokemonsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

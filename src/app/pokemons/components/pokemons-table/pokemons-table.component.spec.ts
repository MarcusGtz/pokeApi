import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonsTableComponent } from './pokemons-table.component';

describe('PokemonsTableComponent', () => {
  let component: PokemonsTableComponent;
  let fixture: ComponentFixture<PokemonsTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonsTableComponent]
    });
    fixture = TestBed.createComponent(PokemonsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

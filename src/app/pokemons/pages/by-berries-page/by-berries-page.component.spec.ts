import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByBerriesPageComponent } from './by-berries-page.component';

describe('ByBerriesPageComponent', () => {
  let component: ByBerriesPageComponent;
  let fixture: ComponentFixture<ByBerriesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ByBerriesPageComponent]
    });
    fixture = TestBed.createComponent(ByBerriesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

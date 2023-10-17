import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BerriesPageComponentComponent } from './berries-page-component.component';

describe('BerriesPageComponentComponent', () => {
  let component: BerriesPageComponentComponent;
  let fixture: ComponentFixture<BerriesPageComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BerriesPageComponentComponent]
    });
    fixture = TestBed.createComponent(BerriesPageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

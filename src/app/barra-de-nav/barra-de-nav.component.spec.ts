import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraDeNavComponent } from './barra-de-nav.component';

describe('BarraDeNavComponent', () => {
  let component: BarraDeNavComponent;
  let fixture: ComponentFixture<BarraDeNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarraDeNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarraDeNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

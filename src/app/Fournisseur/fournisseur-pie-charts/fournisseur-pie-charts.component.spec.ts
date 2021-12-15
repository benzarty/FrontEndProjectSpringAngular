import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FournisseurPieChartsComponent } from './fournisseur-pie-charts.component';

describe('FournisseurPieChartsComponent', () => {
  let component: FournisseurPieChartsComponent;
  let fixture: ComponentFixture<FournisseurPieChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FournisseurPieChartsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FournisseurPieChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

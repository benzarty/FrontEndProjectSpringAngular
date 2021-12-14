import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FournisseurChartComponent } from './fournisseur-chart.component';

describe('FournisseurChartComponent', () => {
  let component: FournisseurChartComponent;
  let fixture: ComponentFixture<FournisseurChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FournisseurChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FournisseurChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

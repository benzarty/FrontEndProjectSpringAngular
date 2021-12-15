import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorieFournisseurComponent } from './categorie-fournisseur.component';

describe('CategorieFournisseurComponent', () => {
  let component: CategorieFournisseurComponent;
  let fixture: ComponentFixture<CategorieFournisseurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategorieFournisseurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorieFournisseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

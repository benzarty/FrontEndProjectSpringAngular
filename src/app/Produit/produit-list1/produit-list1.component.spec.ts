import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitList1Component } from './produit-list1.component';

describe('ProduitList1Component', () => {
  let component: ProduitList1Component;
  let fixture: ComponentFixture<ProduitList1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProduitList1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduitList1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

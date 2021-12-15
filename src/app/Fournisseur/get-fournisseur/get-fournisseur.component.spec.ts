import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetFournisseurComponent } from './get-fournisseur.component';

describe('GetFournisseurComponent', () => {
  let component: GetFournisseurComponent;
  let fixture: ComponentFixture<GetFournisseurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetFournisseurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetFournisseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

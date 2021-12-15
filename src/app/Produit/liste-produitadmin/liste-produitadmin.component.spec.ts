import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeProduitadminComponent } from './liste-produitadmin.component';

describe('ListeProduitadminComponent', () => {
  let component: ListeProduitadminComponent;
  let fixture: ComponentFixture<ListeProduitadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeProduitadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeProduitadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

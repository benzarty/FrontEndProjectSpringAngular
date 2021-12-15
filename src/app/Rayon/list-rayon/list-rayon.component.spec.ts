import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRayonComponent } from './list-rayon.component';

describe('ListRayonComponent', () => {
  let component: ListRayonComponent;
  let fixture: ComponentFixture<ListRayonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListRayonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRayonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

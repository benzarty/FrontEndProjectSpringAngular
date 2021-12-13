import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRayonComponent } from './update-rayon.component';

describe('UpdateRayonComponent', () => {
  let component: UpdateRayonComponent;
  let fixture: ComponentFixture<UpdateRayonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateRayonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateRayonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryFactureComponent } from './history-facture.component';

describe('HistoryFactureComponent', () => {
  let component: HistoryFactureComponent;
  let fixture: ComponentFixture<HistoryFactureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryFactureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryFactureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

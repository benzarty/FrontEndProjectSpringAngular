import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientRetrieveComponent } from './client-retrieve.component';

describe('ClientRetrieveComponent', () => {
  let component: ClientRetrieveComponent;
  let fixture: ComponentFixture<ClientRetrieveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientRetrieveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientRetrieveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditInscriptioneventComponent } from './edit-inscriptionevent.component';

describe('EditInscriptioneventComponent', () => {
  let component: EditInscriptioneventComponent;
  let fixture: ComponentFixture<EditInscriptioneventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditInscriptioneventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditInscriptioneventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

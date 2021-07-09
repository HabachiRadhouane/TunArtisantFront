import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteInscriptioneventComponent } from './delete-inscriptionevent.component';

describe('DeleteInscriptioneventComponent', () => {
  let component: DeleteInscriptioneventComponent;
  let fixture: ComponentFixture<DeleteInscriptioneventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteInscriptioneventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteInscriptioneventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

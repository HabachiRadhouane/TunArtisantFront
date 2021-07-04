import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowInscriptioneventComponent } from './show-inscriptionevent.component';

describe('ShowInscriptioneventComponent', () => {
  let component: ShowInscriptioneventComponent;
  let fixture: ComponentFixture<ShowInscriptioneventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowInscriptioneventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowInscriptioneventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChekcoutDetailsComponent } from './chekcout-details.component';

describe('ChekcoutDetailsComponent', () => {
  let component: ChekcoutDetailsComponent;
  let fixture: ComponentFixture<ChekcoutDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChekcoutDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChekcoutDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

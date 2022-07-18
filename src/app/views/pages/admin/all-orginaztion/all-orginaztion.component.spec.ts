import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllOrginaztionComponent } from './all-orginaztion.component';

describe('AllOrginaztionComponent', () => {
  let component: AllOrginaztionComponent;
  let fixture: ComponentFixture<AllOrginaztionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllOrginaztionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllOrginaztionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

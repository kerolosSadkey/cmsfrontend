import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOrginaztionComponent } from './create-orginaztion.component';

describe('CreateOrginaztionComponent', () => {
  let component: CreateOrginaztionComponent;
  let fixture: ComponentFixture<CreateOrginaztionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateOrginaztionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateOrginaztionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

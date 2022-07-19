import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateOrginaztionComponent } from './update-orginaztion.component';

describe('UpdateOrginaztionComponent', () => {
  let component: UpdateOrginaztionComponent;
  let fixture: ComponentFixture<UpdateOrginaztionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateOrginaztionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateOrginaztionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

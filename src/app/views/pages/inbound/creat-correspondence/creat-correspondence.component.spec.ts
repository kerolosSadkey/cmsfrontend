import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatCorrespondenceComponent } from './creat-correspondence.component';

describe('CreatCorrespondenceComponent', () => {
  let component: CreatCorrespondenceComponent;
  let fixture: ComponentFixture<CreatCorrespondenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatCorrespondenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatCorrespondenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

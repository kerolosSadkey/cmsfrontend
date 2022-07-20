import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLaserficheComponent } from './user-laserfiche.component';

describe('UserLaserficheComponent', () => {
  let component: UserLaserficheComponent;
  let fixture: ComponentFixture<UserLaserficheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserLaserficheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserLaserficheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

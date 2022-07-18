import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaulPagetAdminComponent } from './defaul-paget-admin.component';

describe('DefaulPagetAdminComponent', () => {
  let component: DefaulPagetAdminComponent;
  let fixture: ComponentFixture<DefaulPagetAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefaulPagetAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaulPagetAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

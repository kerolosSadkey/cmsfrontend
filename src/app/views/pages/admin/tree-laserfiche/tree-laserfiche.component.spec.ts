import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeLaserficheComponent } from './tree-laserfiche.component';

describe('TreeLaserficheComponent', () => {
  let component: TreeLaserficheComponent;
  let fixture: ComponentFixture<TreeLaserficheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreeLaserficheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeLaserficheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCrudLayoutComponent } from './admin-crud-layout.component';

describe('AdminCrudLayoutComponent', () => {
  let component: AdminCrudLayoutComponent;
  let fixture: ComponentFixture<AdminCrudLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminCrudLayoutComponent]
    });
    fixture = TestBed.createComponent(AdminCrudLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

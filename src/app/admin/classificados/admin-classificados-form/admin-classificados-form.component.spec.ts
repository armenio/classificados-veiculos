import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminClassificadosFormComponent } from './admin-classificados-form.component';

describe('AdminClassificadosFormComponent', () => {
  let component: AdminClassificadosFormComponent;
  let fixture: ComponentFixture<AdminClassificadosFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminClassificadosFormComponent]
    });
    fixture = TestBed.createComponent(AdminClassificadosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

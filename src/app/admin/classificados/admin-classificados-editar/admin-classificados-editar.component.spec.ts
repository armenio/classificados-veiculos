import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminClassificadosEditarComponent } from './admin-classificados-editar.component';

describe('AdminClassificadosEditarComponent', () => {
  let component: AdminClassificadosEditarComponent;
  let fixture: ComponentFixture<AdminClassificadosEditarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminClassificadosEditarComponent]
    });
    fixture = TestBed.createComponent(AdminClassificadosEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

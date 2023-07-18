import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminClassificadosListarComponent } from './admin-classificados-listar.component';

describe('AdminClassificadosListarComponent', () => {
  let component: AdminClassificadosListarComponent;
  let fixture: ComponentFixture<AdminClassificadosListarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminClassificadosListarComponent]
    });
    fixture = TestBed.createComponent(AdminClassificadosListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

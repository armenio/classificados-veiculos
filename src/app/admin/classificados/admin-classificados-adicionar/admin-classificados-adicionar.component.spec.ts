import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminClassificadosAdicionarComponent } from './admin-classificados-adicionar.component';

describe('AdminClassificadosAdicionarComponent', () => {
  let component: AdminClassificadosAdicionarComponent;
  let fixture: ComponentFixture<AdminClassificadosAdicionarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminClassificadosAdicionarComponent]
    });
    fixture = TestBed.createComponent(AdminClassificadosAdicionarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

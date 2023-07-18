import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminClassificadosRemoverComponent } from './admin-classificados-remover.component';

describe('AdminClassificadosRemoverComponent', () => {
  let component: AdminClassificadosRemoverComponent;
  let fixture: ComponentFixture<AdminClassificadosRemoverComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminClassificadosRemoverComponent]
    });
    fixture = TestBed.createComponent(AdminClassificadosRemoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

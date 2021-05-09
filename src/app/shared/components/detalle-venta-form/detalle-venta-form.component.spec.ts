import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleVentaFormComponent } from './detalle-venta-form.component';

describe('DetalleVentaFormComponent', () => {
  let component: DetalleVentaFormComponent;
  let fixture: ComponentFixture<DetalleVentaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleVentaFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleVentaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

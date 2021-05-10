import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleDetalleVentaComponent } from './detalle-detalle-venta.component';

describe('DetalleDetalleVentaComponent', () => {
  let component: DetalleDetalleVentaComponent;
  let fixture: ComponentFixture<DetalleDetalleVentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleDetalleVentaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleDetalleVentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoDetalleVentaComponent } from './nuevo-detalle-venta.component';

describe('NuevoDetalleVentaComponent', () => {
  let component: NuevoDetalleVentaComponent;
  let fixture: ComponentFixture<NuevoDetalleVentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoDetalleVentaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoDetalleVentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

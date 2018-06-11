import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TiendaFormComponent } from './tienda-form.component';

describe('TiendaFormComponent', () => {
  let component: TiendaFormComponent;
  let fixture: ComponentFixture<TiendaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiendaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiendaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

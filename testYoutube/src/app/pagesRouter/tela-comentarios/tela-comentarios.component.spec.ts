import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaComentariosComponent } from './tela-comentarios.component';

describe('TelaComentariosComponent', () => {
  let component: TelaComentariosComponent;
  let fixture: ComponentFixture<TelaComentariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaComentariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaComentariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

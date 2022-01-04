import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComentariosAddComponent } from './comentarios-add.component';

describe('ComentariosAddComponent', () => {
  let component: ComentariosAddComponent;
  let fixture: ComponentFixture<ComentariosAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComentariosAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComentariosAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

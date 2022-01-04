import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaReferenciasComponent } from './tela-referencias.component';

describe('TelaReferenciasComponent', () => {
  let component: TelaReferenciasComponent;
  let fixture: ComponentFixture<TelaReferenciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaReferenciasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaReferenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

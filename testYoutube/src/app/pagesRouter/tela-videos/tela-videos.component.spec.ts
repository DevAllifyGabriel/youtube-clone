import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaVideosComponent } from './tela-videos.component';

describe('TelaVideosComponent', () => {
  let component: TelaVideosComponent;
  let fixture: ComponentFixture<TelaVideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaVideosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

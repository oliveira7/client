import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LivroEspecificoComponent } from './livro-especifico.component';

describe('LivroEspecificoComponent', () => {
  let component: LivroEspecificoComponent;
  let fixture: ComponentFixture<LivroEspecificoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivroEspecificoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivroEspecificoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

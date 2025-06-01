import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCadastro } from './page-cadastro';

describe('PageCadastro', () => {
  let component: PageCadastro;
  let fixture: ComponentFixture<PageCadastro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageCadastro]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageCadastro);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

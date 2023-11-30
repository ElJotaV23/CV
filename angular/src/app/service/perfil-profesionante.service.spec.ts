import { TestBed } from '@angular/core/testing';

import { PerfilProfesionanteService } from './perfil-profesionante.service';

describe('PerfilProfesionanteService', () => {
  let service: PerfilProfesionanteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PerfilProfesionanteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

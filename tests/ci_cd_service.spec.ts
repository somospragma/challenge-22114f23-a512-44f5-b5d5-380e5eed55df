import { Test, TestingModule } from '@nestjs/testing';
import { CiCdService } from '../src/application/ci_cd_service';
import { CiCdRepository } from '../src/infrastructure/ci_cd_repository';

describe('CiCdService', () => {
  let service: CiCdService;
  let repository: CiCdRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CiCdService, CiCdRepository],
    }).compile();

    service = module.get<CiCdService>(CiCdService);
    repository = module.get<CiCdRepository>(CiCdRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return CI/CD information', async () => {
    jest.spyOn(repository, 'getCiCdInfo').mockResolvedValue({
      ciDescription: 'Integración Continua',
      cdDescription: 'Despliegue Continuo',
      benefits: ['Reducción de errores', 'Entregas más rápidas'],
      tools: ['Jenkins', 'GitHub Actions'],
      practices: ['Automatización de pruebas', 'Control de versiones'],
      commonErrors: ['Falta de automatización', 'Mala configuración']
    } as CiCdModel);

    const result = await service.getCiCdInfo();
    expect(result).toEqual({
      ciDescription: 'Integración Continua',
      cdDescription: 'Despliegue Continuo',
      benefits: ['Reducción de errores', 'Entregas más rápidas'],
      tools: ['Jenkins', 'GitHub Actions'],
      practices: ['Automatización de pruebas', 'Control de versiones'],
      commonErrors: ['Falta de automatización', 'Mala configuración']
    });
  });
});
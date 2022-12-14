import { Test, TestingModule } from '@nestjs/testing';
import { AsignaturasController } from './asignaturas.controller';
import { AsignaturasService } from './asignaturas.service';

describe('AsignaturasController', () => {
  let controller: AsignaturasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AsignaturasController],
      providers: [AsignaturasService],
    }).compile();

    controller = module.get<AsignaturasController>(AsignaturasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

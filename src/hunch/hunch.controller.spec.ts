import { Test, TestingModule } from '@nestjs/testing';
import { HunchController } from './hunch.controller';
import { HunchService } from './hunch.service';

describe('HunchController', () => {
  let controller: HunchController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HunchController],
      providers: [HunchService],
    }).compile();

    controller = module.get<HunchController>(HunchController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

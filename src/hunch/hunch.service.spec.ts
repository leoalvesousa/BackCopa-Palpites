import { Test, TestingModule } from '@nestjs/testing';
import { HunchService } from './hunch.service';

describe('HunchService', () => {
  let service: HunchService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HunchService],
    }).compile();

    service = module.get<HunchService>(HunchService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

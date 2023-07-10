import { Test, TestingModule } from '@nestjs/testing';
import { HightLightService } from './hight-light.service';

describe('HightLightService', () => {
  let service: HightLightService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HightLightService],
    }).compile();

    service = module.get<HightLightService>(HightLightService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { HightLightController } from './hight-light.controller';
import { HightLightService } from './hight-light.service';

describe('HightLightController', () => {
  let controller: HightLightController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HightLightController],
      providers: [HightLightService],
    }).compile();

    controller = module.get<HightLightController>(HightLightController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { Module } from '@nestjs/common';
import { HightLightService } from './hight-light.service';
import { HightLightController } from './hight-light.controller';

@Module({
  controllers: [HightLightController],
  providers: [HightLightService]
})
export class HightLightModule {}

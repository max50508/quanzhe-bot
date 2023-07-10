import { Controller } from '@nestjs/common';
import { HightLightService } from './hight-light.service';

@Controller('hight-light')
export class HightLightController {
  constructor(private readonly hightLightService: HightLightService) {}
}

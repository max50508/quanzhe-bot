import { Controller } from '@nestjs/common';
import { AbilityService } from './ability.service';

@Controller('ability')
export class AbilityController {
  constructor(private readonly abilityService: AbilityService) {}
}

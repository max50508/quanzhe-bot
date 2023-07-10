import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HightLightModule } from './hight-light/hight-light.module';
import { ProjectModule } from './project/project.module';
import { AbilityModule } from './ability/ability.module';

@Module({
  imports: [HightLightModule, ProjectModule, AbilityModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

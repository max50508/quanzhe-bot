import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotEnv from 'dotenv';
import { join } from 'path';

async function bootstrap() {
  const env = dotEnv.config({
    path: join(__dirname, `/.env`),
  }).parsed;
  Object.assign(process.env, env);
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(3000);
}
bootstrap();

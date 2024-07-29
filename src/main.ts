import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// @ts-ignore
require('dotenv').config();
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // @ts-ignore
  await app.listen(process.env.APP_PORT || 3000);
}
bootstrap();

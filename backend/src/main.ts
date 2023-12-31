/* eslint-disable @typescript-eslint/no-var-requires */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as path from 'path';

require('dotenv').config({ path: path.resolve(__dirname, '../../../.env') });
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const PORT = process.env.PORT || 3001;
  const FRONTEND_ORIGIN =
    process.env.FRONTEND_ORIGIN || 'http://localhost:3000';

  console.log(FRONTEND_ORIGIN);
  app.enableCors({
    origin: FRONTEND_ORIGIN,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type, Accept',
    credentials: true,
  });
  await app.listen(PORT, '0.0.0.0');
}
bootstrap();

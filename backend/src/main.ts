import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const PORT = process.env.PORT || 3001;
  const FRONTEND_ORIGIN =
    process.env.FRONTEND_ORIGIN || 'http://localhost:3000';

  app.enableCors({
    origin: FRONTEND_ORIGIN,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type, Accept',
    credentials: true,
  });
  await app.listen(PORT);
}
bootstrap();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { RABBITMQ_URL } from './constants';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  console.log(process.env.DATABASE_USERNAME);

  const PORT = process.env.PORT || 3001;
  const FRONTEND_ORIGIN =
    process.env.FRONTEND_ORIGIN || 'http://localhost:3000';

  app.enableCors({
    origin: FRONTEND_ORIGIN,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type, Accept',
    credentials: true,
  });

  // const eventBusMicroservice = app.connectMicroservice<MicroserviceOptions>({
  //   transport: Transport.RMQ,
  //   options: {
  //     urls: [RABBITMQ_URL],
  //     queue: 'event_bus',
  //     noAck: false,
  //     queueOptions: {
  //       durable: true,
  //     },
  //   },
  // });

  // await app.startAllMicroservices();
  await app.listen(PORT);
}
bootstrap();

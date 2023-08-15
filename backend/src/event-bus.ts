import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: ['amqp://127.0.0.1:5672'],
        queue: 'event_bus',
        noAck: false,
        queueOptions: {
          durable: true,
        },
      },
    },
  );
  app.listen();
}

bootstrap();

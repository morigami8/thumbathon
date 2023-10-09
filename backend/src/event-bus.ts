/* eslint-disable @typescript-eslint/no-var-requires */
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';
//import { RABBITMQ_URL } from './constants';
import * as path from 'path';

require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });

async function bootstrap() {
  console.log('RabbitMQ URL: ', process.env.RABBITMQ_URL); // Log the URL to debug
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: [process.env.RABBITMQ_URL],
        queue: 'event_bus',
        noAck: false,
        queueOptions: {
          durable: true,
        },
      },
    },
  );

  await app.listen();
  console.log('Microservice is listening'); // Log when service is listening
}

bootstrap();

/* eslint-disable @typescript-eslint/no-var-requires */
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { RABBITMQ_URL } from './constants';
import { config } from 'dotenv';
import * as path from 'path';

require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: [RABBITMQ_URL],
        queue: 'event_bus',
        noAck: false,
        queueOptions: {
          durable: true,
        },
      },
    },
  );

  console.log('From event bus path: ', process.env.RABBITMQ_URL);
  app.listen();
}

bootstrap();

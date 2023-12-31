import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import { Image } from './src/modules/image/entities/image.entity';
import { Users } from './src/modules/user/entities/users.entity';

config({
  path: '../.env',
});

const configService = new ConfigService();

export default new DataSource({
  type: 'postgres',
  host: configService.get('DATABASE_HOST'),
  port: +configService.get('DATABASE_PORT'),
  username: configService.get('DATABASE_USERNAME'),
  password: configService.get('DATABASE_PASSWORD'),
  database: configService.get('DATABASE_NAME'),
  entities: [Image, Users],
  migrations: ['./src/migrations/*.ts'],
});

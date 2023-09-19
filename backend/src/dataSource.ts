import { DataSource } from 'typeorm';
import { Image } from './modules/image/entities/image.entity';
import { Users } from './modules/user/entities/users.entity';
export default new DataSource({
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: +process.env.DATABASE_PORT,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  entities: [Users, Image],
  synchronize: false,
  migrations: ['./src/migrations/*.ts'],
});

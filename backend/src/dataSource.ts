import { DataSource } from 'typeorm';
import { User } from './modules/user/entities/user.entity';
import { Image } from './modules/image/entities/image.entity';
export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'mjatwood',
  password: 'postgres',
  database: 'postgres',
  entities: [User, Image],
  synchronize: false,
  migrations: ['./src/migrations/*.ts'],
});

import { DataSource } from 'typeorm';
import { Image } from './modules/image/entities/image.entity';
import { Users } from './modules/user/entities/users.entity';
export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'mjatwood',
  password: 'postgres',
  database: 'postgres',
  entities: [Users, Image],
  synchronize: false,
  migrations: ['./src/migrations/*.ts'],
});

import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Image } from '../../image/entities/image.entity';
import { DateTimes } from '../../common/entities/dateTimes.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column(() => DateTimes)
  date: DateTimes;

  @OneToMany(() => Image, (image) => image.user)
  images: Image[];
}

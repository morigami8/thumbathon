import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { DateTimes } from '../../common/entities/dateTimes.entity';
import { Users } from '../../user/entities/users.entity';

@Entity()
export class Image {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  url: string;

  @Column(() => DateTimes)
  date: DateTimes;

  @ManyToOne(() => Users, (Users) => Users.images)
  @JoinColumn({ name: 'Users_id' })
  Users: Users;

  @Column()
  Users_id: number;
}

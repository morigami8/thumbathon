import { CreateDateColumn, Entity, UpdateDateColumn } from 'typeorm';

@Entity()
export class DateTimes {
  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

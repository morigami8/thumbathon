import { IsNotEmpty } from 'class-validator';

export class CreateImageDto {
  url: string;

  @IsNotEmpty()
  user_id: number;
}

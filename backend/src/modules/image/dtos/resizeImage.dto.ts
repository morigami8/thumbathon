import { IsString, IsUrl, Max, Min } from 'class-validator';

export class ResizeImageDto {
  @IsUrl()
  imageUrl: string;

  @Min(150)
  @Max(1000)
  width: number;

  @Min(150)
  @Max(1000)
  height: number;

  @IsString()
  fileName: string;
}

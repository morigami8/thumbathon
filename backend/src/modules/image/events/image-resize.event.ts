import { Type } from 'class-transformer';
import {
  IsString,
  IsInt,
  IsNotEmpty,
  IsEnum,
  IsObject,
  Min,
  Max,
  ValidateNested,
  IsUUID,
} from 'class-validator';

export enum ImageFormat {
  JPEG = 'jpeg',
  PNG = 'png',
}

export class ResizeParametersDto {
  @IsInt()
  width: number;

  @IsInt()
  height: number;

  @IsEnum(ImageFormat)
  format: ImageFormat;

  @IsInt({ each: true })
  @Min(0)
  @Max(100)
  quality: number;

  @IsString()
  @IsNotEmpty()
  outputPath: string;
}

class ImageDataDto {
  @IsString()
  @IsNotEmpty()
  imageId: string;

  @IsString()
  @IsNotEmpty()
  originalPath: string;

  @IsInt()
  userId: number;

  @IsString()
  @IsNotEmpty()
  fileName: string;

  @IsObject()
  resizeParameters: ResizeParametersDto;
}

export class ImageResizeEventDto {
  @IsUUID()
  @IsNotEmpty()
  eventId: string;

  @IsString()
  @IsNotEmpty()
  eventType: string;

  @IsString()
  @IsNotEmpty()
  timestamp: string;

  @IsObject()
  @ValidateNested() // This decorator is necessary to validate nested objects
  @Type(() => ImageDataDto) // Used with 'class-transformer' to instantiate the nested DTO
  data: ImageDataDto;
}

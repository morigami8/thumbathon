import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('file')
export class FileDownloaderController {
  @Get('download')
  downloadFile(@Res() res: Response) {
    const file = './downloads/thumbathon_image.jpeg';
    res.download(file);
  }
}

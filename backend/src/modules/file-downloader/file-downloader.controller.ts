import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { join } from 'path';

@Controller('file')
export class FileDownloaderController {
  @Get('download')
  downloadFile(@Res() res: Response) {
    const file = join('/tmp', 'downloads', 'thumbathon_image.jpeg');
    res.download(file);
  }
}

import { Module } from '@nestjs/common';
import { FileDownloaderController } from './file-downloader.controller';

@Module({
  controllers: [FileDownloaderController],
})
export class FileDownloaderModule {}

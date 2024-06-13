import { Controller, Get, Param, StreamableFile } from '@nestjs/common';
import { AppService } from './app.service';
import { createReadStream, readFile } from 'fs';
import { join } from 'path';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get('file/:folder/:img')
  readFile(@Param('folder') folder, @Param('img') img):StreamableFile{
    const file=createReadStream(
      join(process.cwd(), './upload/'+folder+'/'+img)
    )
    return new StreamableFile(file)

  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

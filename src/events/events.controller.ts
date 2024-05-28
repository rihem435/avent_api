import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile, UploadedFiles, Put, UseGuards } from '@nestjs/common';
import { EventsService } from './events.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { AccessTokenGuard } from 'src/authentification/guards/accessToken.guard';

@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}
  @UseGuards(AccessTokenGuard)
  @Post()
  @UseInterceptors(
    FilesInterceptor('files', 6, {
      storage: diskStorage({
        destination: './upload/events',
        filename: (_request, file, callback) =>
          callback(null, `${new Date().getTime()}-${file.originalname}`),
                             }),
                             }),)

   createEvent(@Body()createEventDto:CreateEventDto, @UploadedFiles() files) {
     createEventDto.event_galleries = files.map(item=>item.filename);
        return this.eventsService.createEvent(createEventDto);
  }

  /* -- Méthode "Get" de routage d'affichage -- */
  @Get()
    getAllEvent() {
      return this.eventsService.getAllEvent();
  }

  @Get(':id')
    getEvent(@Param('id') id: string) {
      return this.eventsService.getEvent(id);
  }

  @Put(':id')
    updateEvent(@Param('id') id: string, @Body() updateEventDto: UpdateEventDto) {
      return this.eventsService.updateEvent(id, updateEventDto);
  }

  @Delete(':id')
    deleteEvent(@Param('id') id: string) {
      return this.eventsService.deleteEvent(id);
  }
}

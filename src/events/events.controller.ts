import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile, UploadedFiles, Put, UseGuards, HttpStatus, Res } from '@nestjs/common';
import { EventsService } from './events.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { AccessTokenGuard } from 'src/authentification/guards/accessToken.guard';
import { response } from 'express';

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
  @Get(':user_id')
  async findEventByUser(@Param('user_id')user_id:string,@Res()response){
    try {
      const EventByUser = await this.eventsService.findEventByUser(user_id)
      return response.status(HttpStatus.OK).json({
        message:"events found succefully with id user",
        status:HttpStatus.OK,
        data:EventByUser,
      })
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        message: error.message,
        status: HttpStatus.BAD_REQUEST,
        data: null
      })


    }
  }
  /* -- Méthode "Get" de routage d'affichage -- */
  @Get()
    async getAllEvent(@Res() response) {
      try{
      const data =await  this.eventsService.getAllEvent();
      return response.status(HttpStatus.OK).json({
        message: "event found ",
        status: HttpStatus.OK,
        data: data
      })
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        message: error.message,
        status: HttpStatus.NOT_FOUND,
        data:null
      })
      
      
    }
  }

  @Get('byId/:id')
    getEvent(@Param('id') id: string) {
      return this.eventsService.getEvent(id);
  }

  @Put(':id')
  @UseInterceptors(
    FilesInterceptor('files', 6, {
      storage: diskStorage({
        destination: './upload/events',
        filename: (_request, files, callback) =>
          callback(null, `${new Date().getTime()}-${files.originalname}`),
                             }),
                             }),)
                          
 async  updateEventsx(@Body()updateEventsDto:UpdateEventDto, @Param('id') id:string, @UploadedFiles() files) {
     updateEventsDto.event_galleries = files.map(item=>item.filename);
        return this.eventsService.updateEvent(id, updateEventsDto);
   }

  @Delete(':id')
    deleteEvent(@Param('id') id: string) {
      return this.eventsService.deleteEvent(id);
  }
}

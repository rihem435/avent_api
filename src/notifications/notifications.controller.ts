import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { UpdateNotificationDto } from './dto/update-notification.dto';

@Controller('notifications')
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}

  @Post()
  createNotification(@Body() createNotificationDto: CreateNotificationDto) {
    return this.notificationsService.createNotification(createNotificationDto);
  }

  @Get()
  getAllNotification() {
    return this.notificationsService.getAllNotification();
  }

  @Get(':id')
    getNotification(@Param('id') id: string) {
      return this.notificationsService.getNotification(id);
    }

  @Put(':id')
    updateNotification(@Param('id') id: string, @Body() updateNotificationDto: UpdateNotificationDto) {
      return this.notificationsService.updateNotification(id, updateNotificationDto);
    }

  @Delete(':id')
    deleteNotification(@Param('id') id: string) {
      return this.notificationsService.deleteNotification(id);
    }

   /*-- @Post("/sendnotif")
  async sendNotification(
    @Body("title") title: string,
    @Body("body") body: string,
    @Body("token") token: string,
  ): Promise<any> {
    try {
      const response = await this.notificationsService.sendNotification(
        title,
        body,
        token,
      );

      return {
        message: "Notification sent successfully",
        data: response,
      };

    } catch (error) {
      return {
        message: "Failed to send notification",
        error: error.message,
      };
    }
  } --*/

}

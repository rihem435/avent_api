import { Module } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { NotificationsController } from './notifications.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { NotificationSchema } from './entities/notification.entity';



@Module({
  imports: [ MongooseModule.forFeature([{name:"notifications", schema: NotificationSchema}]),
           ],

    controllers: [NotificationsController],
    providers: [NotificationsService],

      })

export class NotificationsModule {}

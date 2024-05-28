import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';

import { MembersModule } from './members/members.module';

import { ModeratorsModule } from './moderators/moderators.module';
import { AdminstratorsModule } from './adminstrators/adminstrators.module';
import { MongooseModule } from '@nestjs/mongoose';
import { EventsModule } from './events/events.module';
import { InvitationsModule } from './invitations/invitations.module';
import { CommentsModule } from './comments/comments.module';
import { AuthentificationModule } from './authentification/authentification.module';
import { config } from 'rxjs';
import { ConfigModule } from '@nestjs/config';
import { NotificationsModule } from './notifications/notifications.module';

@Module({
  imports: [
      MongooseModule.forRoot('mongodb://127.0.0.1:27017', {dbName: 'platform_event_db'}),
      UsersModule, 
      MembersModule,
      ModeratorsModule,
      AdminstratorsModule,
      EventsModule,
      InvitationsModule,
      CommentsModule,
      AuthentificationModule,
      
      ConfigModule.forRoot({isGlobal: true}),
      
      NotificationsModule,
    ],

  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}

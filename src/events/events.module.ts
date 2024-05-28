import { Module } from '@nestjs/common';
import { EventsService } from './events.service';
import { EventsController } from './events.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { EventSchema } from './entities/event.entity';
import { UserSchema } from 'src/users/entities/user.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{name: 'events', schema: EventSchema}, {name:"users", schema: UserSchema}]),
  ],

    controllers: [EventsController],
    providers: [EventsService],
})

export class EventsModule {}

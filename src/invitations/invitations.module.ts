import { Module } from '@nestjs/common';
import { InvitationsService } from './invitations.service';
import { InvitationsController } from './invitations.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { InvitationSchema } from './entities/invitation.entity';
import { UserSchema } from 'src/users/entities/user.entity';
import { EventSchema } from 'src/events/entities/event.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{name:"invitations", schema: InvitationSchema}, 
                              {name:"users", schema: UserSchema}, 
                              {name:"events", schema: EventSchema}
                              ]) 
  ],

  controllers: [InvitationsController],
  providers: [InvitationsService],

})

export class InvitationsModule {}

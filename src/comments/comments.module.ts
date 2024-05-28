import { Module } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CommentsController } from './comments.controller';
import { EventSchema } from 'src/events/entities/event.entity';
import { InvitationSchema } from 'src/invitations/entities/invitation.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from 'src/users/entities/user.entity';
import { CommentSchema } from './entities/comment.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{name:"comments", schema: CommentSchema}, 
                              {name:"users", schema: UserSchema}, 
                              {name:"events", schema: EventSchema}
                              ]) 
  ],

  controllers: [CommentsController],
  providers: [CommentsService],

})

export class CommentsModule {}

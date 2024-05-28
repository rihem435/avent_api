import { Module } from '@nestjs/common';
import { ModeratorsService } from './moderators.service';
import { ModeratorsController } from './moderators.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from 'src/users/entities/user.entity';
import { ModeratorSchema } from './entities/moderator.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{name: 'users', schema: UserSchema}]), 
  ],
  
    controllers: [ModeratorsController],
    providers: [ModeratorsService],
  

})
export class ModeratorsModule {}


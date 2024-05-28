import { Module } from '@nestjs/common';
import { MembersService } from './members.service';
import { MembersController } from './members.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { MemeberSchema } from './entities/member.entity';
import { UserSchema } from 'src/users/entities/user.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{name: 'users', schema: UserSchema}]), 
  ],

  controllers: [MembersController],
  providers: [MembersService],
  exports: [MembersService],

})
export class MembersModule {}




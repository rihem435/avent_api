import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule, Schema } from '@nestjs/mongoose';
import { UserSchema } from './entities/user.entity';
import { MemeberSchema } from 'src/members/entities/member.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{name: 'users', schema: UserSchema, discriminators: [{name: 'members', schema: MemeberSchema}]}]),
  ],

    controllers: [UsersController],
    providers: [UsersService],
    exports: [UsersService],

})

export class UsersModule {}

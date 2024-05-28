import { Module } from '@nestjs/common';
import { AdminstratorsService } from './adminstrators.service';
import { AdminstratorsController } from './adminstrators.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from 'src/users/entities/user.entity';
import { AdminstratorSchema } from './entities/adminstrator.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{name: 'users', schema: UserSchema}]), 
  ],

    controllers: [AdminstratorsController],
    providers: [AdminstratorsService],
   
})
export class AdminstratorsModule {}

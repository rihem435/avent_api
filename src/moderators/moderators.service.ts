import { Injectable } from '@nestjs/common';
import { CreateModeratorDto } from './dto/create-moderator.dto';
import { UpdateModeratorDto } from './dto/update-moderator.dto';
import { IModerator } from './interface/moderator.interface';
import { InjectModel } from '@nestjs/mongoose';
import { NotFoundException } from '@nestjs/common';
import { UpdateMemberDto } from 'src/members/dto/update-member.dto';
import { Model } from 'mongoose';

@Injectable()
export class ModeratorsService {
  constructor (@InjectModel('users') private ModeratorModel: Model<IModerator>) {}

  async createModerator(CreateModeratorDto: CreateModeratorDto): Promise<IModerator> {

    const newModerator = await new this.ModeratorModel(CreateModeratorDto);
    return newModerator.save();
  
  }

  async updateModerator(ModeratorId: string, updateModeratorDto: UpdateModeratorDto): Promise<IModerator> {
    const existingModerator = await this.ModeratorModel.findByIdAndUpdate(ModeratorId, UpdateModeratorDto, {new: true});
  
    if (!existingModerator) {
      throw new NotFoundException('Moderator #${ModeratorId} not found');
    }
      return existingModerator;
  }
  
  async getAllModerator(): Promise <IModerator[]> {
    const ModeratorData = await this.ModeratorModel.find({role:"Moderators"});
      if (!ModeratorData || ModeratorData.length == 0) {
        throw new NotFoundException('Moderator data not found!');
      }
        return ModeratorData;
}

  async getModerator (ModeratorId: string): Promise<IModerator> {
    const existingModerator= await this.ModeratorModel.findById(ModeratorId).exec();
      if (!existingModerator) {
        throw new NotFoundException(`Moderator #${ModeratorId} not found`);
      }
        return existingModerator;
}

  async deleteModrator(ModeratorId: string): Promise<IModerator> {
    const deleteModerator = await this.ModeratorModel.findByIdAndDelete(ModeratorId);    
      if (!deleteModerator) {
        throw new NotFoundException('Moderator #${ModeratorId} not found');
      }
          return deleteModerator;

  }

}

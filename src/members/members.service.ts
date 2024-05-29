import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';
import { InjectModel } from '@nestjs/mongoose';
import { IMember } from './interface/members.interface';
import { Model, deleteModel } from 'mongoose';



@Injectable()
export class MembersService {

  constructor (@InjectModel('users') private MemberModel: Model<IMember>) {}

  async createMember(createMemberDto: CreateMemberDto): Promise<IMember> {
    console.log(`data============================`)

    const newMember = await new this.MemberModel(createMemberDto);
    return newMember.save();
  
  }

  async updateMember(MemberId: string, updateMemberDto: UpdateMemberDto): Promise<IMember> {
    const existingMember = await this.MemberModel.findByIdAndUpdate(MemberId, updateMemberDto, {new: true});
  
    if (!existingMember) {
      throw new NotFoundException('Member #${MemberId} not found');
    }
      return existingMember;
  }
  
  async getAllMember(): Promise <IMember[]> {
    const MemberData = await this.MemberModel.find({role:"Members"});
      if (!MemberData || MemberData.length == 0) {
        throw new NotFoundException('Members data not found!');
      }
        return MemberData;
}

  async getMember (MemberId: string): Promise<IMember> {
    const existingMember= await this.MemberModel.findById(MemberId).exec();
      if (!existingMember) {
        throw new NotFoundException(`Member #${MemberId} not found`);
      }
        return existingMember;
}

  async deleteMember(MemberId: string): Promise<IMember> {
    const deleteMember = await this.MemberModel.findByIdAndDelete(MemberId);    
      if (!deleteMember) {
        throw new NotFoundException('Member #${UserId} not found');
      }
          return deleteMember;

  }

}
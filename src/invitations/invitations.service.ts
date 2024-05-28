import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateInvitationDto } from './dto/create-invitation.dto';
import { UpdateInvitationDto } from './dto/update-invitation.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IInvitation } from './interface/invitations.interface';
import { IEvent } from 'src/events/interface/events.interface';
import { IUser } from 'src/users/interface/users.interface';

@Injectable()
export class InvitationsService {
  constructor (@InjectModel('invitations') private InvitationModel: Model<IInvitation>, @InjectModel('users') private UserModel: Model<IUser>, @InjectModel('events') private EventModel: Model<IEvent> ) {}

  async createInvitation(createInvitationDto: CreateInvitationDto): Promise<IInvitation> {

    const newInvitation = await new this.InvitationModel(createInvitationDto);

    /*-- Déclaration d'un remplissage automatique d'un tableau --*/
    await this.UserModel.findByIdAndUpdate(createInvitationDto.user_id, {$push:{invitations:newInvitation}});

    /*-- Déclaration d'un remplissage automatique d'un tableau --*/
    await this.EventModel.findByIdAndUpdate(createInvitationDto.event_id, {$push:{invitations:newInvitation}});

    return newInvitation.save();
  
  }

  async updateInvitation(InvitationId: string, updateInvitationDto: UpdateInvitationDto): Promise<IInvitation> {
    const existingInvitation = await this.InvitationModel.findByIdAndUpdate(InvitationId, updateInvitationDto, {new: true});
  
    if (!existingInvitation) {
      throw new NotFoundException('Invitation #${InvitationId} not found');
    }
      return existingInvitation;
  }
  
  async getAllInvitation(): Promise <IInvitation[]> {
    const InvitationData = await this.InvitationModel.find();
      if (!InvitationData || InvitationData.length == 0) {
        throw new NotFoundException('Invitation data not found!');
      }
        return InvitationData;
}

  async getInvitation (InvitationId: string): Promise<IInvitation> {
    const existingInvitation = await this.InvitationModel.findById(InvitationId).exec();
      if (!existingInvitation) {
        throw new NotFoundException(`Invitation #${InvitationId} not found`);
      }
        return existingInvitation;
}

  async deleteInvitation(InvitationId: string): Promise<IInvitation> {
    const deleteInvitation = await this.InvitationModel.findByIdAndDelete(InvitationId);    
      if (!deleteInvitation) {
        throw new NotFoundException('Invitation #${InvitationId} not found');
      }
          return deleteInvitation;

  }
   
}

import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IEvent } from './interface/events.interface';
import { IUser } from 'src/users/interface/users.interface';

@Injectable()
export class EventsService {

  constructor (@InjectModel('events')private EventModel: Model<IEvent>, @InjectModel('users')private UserModel: Model<IUser>) {}

  async createEvent(createEventDto: CreateEventDto): Promise<IEvent> {

    const newEvent = await new this.EventModel(createEventDto);
    
    /*-- Déclaration d'un remplissage automatique d'un tableau --*/
    await this.UserModel.findByIdAndUpdate(createEventDto.user_id, {$push:{events:newEvent}});

    return newEvent.save();
  
  }

  async updateEvent(EventId: string, updateEventDto: UpdateEventDto): Promise<IEvent> {
    const existingEvent = await this.EventModel.findByIdAndUpdate(EventId, updateEventDto, {new: true});
  
    if (!existingEvent) {
      throw new NotFoundException('Event #${EventId} not found');
    }
      return existingEvent;
  }
  
  async getAllEvent(): Promise <IEvent[]> {
    const EventData= await this.EventModel.find();
      if (!EventData|| EventData.length == 0) {
        throw new NotFoundException('Events data not found!');
      }
        return EventData;
}

  async getEvent (EventId: string): Promise<IEvent> {
    const existingEvent = await this.EventModel.findById(EventId).exec();
      if (!existingEvent) {
        throw new NotFoundException(`User #${EventId} not found`);
      }
        return existingEvent;
}

  async deleteEvent(EventId: string): Promise<IEvent> {
    const deleteEvent = await this.EventModel.findByIdAndDelete(EventId);    
      if (!deleteEvent) {
        throw new NotFoundException('User #${EventId} not found');
      }
          return deleteEvent;

  }

 }

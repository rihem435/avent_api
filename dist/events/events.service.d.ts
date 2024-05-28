/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { Model } from 'mongoose';
import { IEvent } from './interface/events.interface';
import { IUser } from 'src/users/interface/users.interface';
export declare class EventsService {
    private EventModel;
    private UserModel;
    constructor(EventModel: Model<IEvent>, UserModel: Model<IUser>);
    createEvent(createEventDto: CreateEventDto): Promise<IEvent>;
    updateEvent(EventId: string, updateEventDto: UpdateEventDto): Promise<IEvent>;
    getAllEvent(): Promise<IEvent[]>;
    getEvent(EventId: string): Promise<IEvent>;
    deleteEvent(EventId: string): Promise<IEvent>;
}

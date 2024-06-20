import { EventsService } from './events.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
export declare class EventsController {
    private readonly eventsService;
    constructor(eventsService: EventsService);
    createEvent(createEventDto: CreateEventDto, files: any): Promise<import("src/events/interface/events.interface").IEvent>;
    findEventByUser(user_id: string, response: any): Promise<any>;
    getAllEvent(response: any): Promise<any>;
    getEvent(id: string): Promise<import("src/events/interface/events.interface").IEvent>;
    updateEvent(id: string, updateEventDto: UpdateEventDto): Promise<import("src/events/interface/events.interface").IEvent>;
    deleteEvent(id: string): Promise<import("src/events/interface/events.interface").IEvent>;
}

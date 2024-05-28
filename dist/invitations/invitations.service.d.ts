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
import { CreateInvitationDto } from './dto/create-invitation.dto';
import { UpdateInvitationDto } from './dto/update-invitation.dto';
import { Model } from 'mongoose';
import { IInvitation } from './interface/invitations.interface';
import { IEvent } from 'src/events/interface/events.interface';
import { IUser } from 'src/users/interface/users.interface';
export declare class InvitationsService {
    private InvitationModel;
    private UserModel;
    private EventModel;
    constructor(InvitationModel: Model<IInvitation>, UserModel: Model<IUser>, EventModel: Model<IEvent>);
    createInvitation(createInvitationDto: CreateInvitationDto): Promise<IInvitation>;
    updateInvitation(InvitationId: string, updateInvitationDto: UpdateInvitationDto): Promise<IInvitation>;
    getAllInvitation(): Promise<IInvitation[]>;
    getInvitation(InvitationId: string): Promise<IInvitation>;
    deleteInvitation(InvitationId: string): Promise<IInvitation>;
}

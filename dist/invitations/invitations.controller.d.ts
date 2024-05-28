import { InvitationsService } from './invitations.service';
import { CreateInvitationDto } from './dto/create-invitation.dto';
import { UpdateInvitationDto } from './dto/update-invitation.dto';
export declare class InvitationsController {
    private readonly invitationsService;
    constructor(invitationsService: InvitationsService);
    createInvitation(createInvitationDto: CreateInvitationDto): Promise<import("src/invitations/interface/invitations.interface").IInvitation>;
    getAllInvitation(): Promise<import("src/invitations/interface/invitations.interface").IInvitation[]>;
    getInvitation(id: string): Promise<import("src/invitations/interface/invitations.interface").IInvitation>;
    updateInvitation(id: string, updateInvitationDto: UpdateInvitationDto): Promise<import("src/invitations/interface/invitations.interface").IInvitation>;
    deleteInvitation(id: string): Promise<import("src/invitations/interface/invitations.interface").IInvitation>;
}

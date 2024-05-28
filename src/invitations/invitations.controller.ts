import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { InvitationsService } from './invitations.service';
import { CreateInvitationDto } from './dto/create-invitation.dto';
import { UpdateInvitationDto } from './dto/update-invitation.dto';

@Controller('invitations')
  export class InvitationsController {
    constructor(private readonly invitationsService: InvitationsService) {}

    @Post()
    createInvitation(@Body() createInvitationDto: CreateInvitationDto) {
      return this.invitationsService.createInvitation(createInvitationDto);
    }

    @Get()
    getAllInvitation() {
      return this.invitationsService.getAllInvitation();
    }

    @Get(':id')
      getInvitation(@Param('id') id: string) {
        return this.invitationsService.getInvitation(id);
      }

    @Put(':id')
      updateInvitation(@Param('id') id: string, @Body() updateInvitationDto: UpdateInvitationDto) {
        return this.invitationsService.updateInvitation(id, updateInvitationDto);
      }

    @Delete(':id')
      deleteInvitation(@Param('id') id: string) {
        return this.invitationsService.deleteInvitation(id);
      }

}

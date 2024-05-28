import { MembersService } from './members.service';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';
export declare class MembersController {
    private readonly membersService;
    constructor(membersService: MembersService);
    create(createMemberDto: CreateMemberDto, file: any): Promise<import("src/members/interface/members.interface").IMember>;
    findAll(): Promise<import("src/members/interface/members.interface").IMember[]>;
    findOne(id: string): Promise<import("src/members/interface/members.interface").IMember>;
    update(id: string, updateMemberDto: UpdateMemberDto): Promise<import("src/members/interface/members.interface").IMember>;
    remove(id: string): Promise<import("src/members/interface/members.interface").IMember>;
}

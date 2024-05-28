import { ModeratorsService } from './moderators.service';
import { CreateModeratorDto } from './dto/create-moderator.dto';
import { UpdateModeratorDto } from './dto/update-moderator.dto';
export declare class ModeratorsController {
    private readonly moderatorsService;
    constructor(moderatorsService: ModeratorsService);
    create(createModeratorDto: CreateModeratorDto, file: any): Promise<import("src/moderators/interface/moderator.interface").IModerator>;
    findAll(): Promise<import("src/moderators/interface/moderator.interface").IModerator[]>;
    findOne(id: string): Promise<import("src/moderators/interface/moderator.interface").IModerator>;
    update(id: string, updateModeratorDto: UpdateModeratorDto): Promise<import("src/moderators/interface/moderator.interface").IModerator>;
    remove(id: string): Promise<import("src/moderators/interface/moderator.interface").IModerator>;
}

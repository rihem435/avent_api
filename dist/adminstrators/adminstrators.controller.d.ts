import { AdminstratorsService } from './adminstrators.service';
import { CreateAdminstratorDto } from './dto/create-adminstrator.dto';
import { UpdateAdminstratorDto } from './dto/update-adminstrator.dto';
export declare class AdminstratorsController {
    private readonly adminstratorsService;
    constructor(adminstratorsService: AdminstratorsService);
    create(createAdminstratorDto: CreateAdminstratorDto, file: any): Promise<import("src/adminstrators/interface/adminstrators.interface").IAdminstrator>;
    findAll(): Promise<import("src/adminstrators/interface/adminstrators.interface").IAdminstrator[]>;
    findOne(id: string): Promise<import("src/adminstrators/interface/adminstrators.interface").IAdminstrator>;
    updateImagesGalleriesEvents(updateAdminstratorDto: UpdateAdminstratorDto, id: string, file: any): Promise<import("src/adminstrators/interface/adminstrators.interface").IAdminstrator>;
    updateEvent(id: string, updateAdminstratorDto: UpdateAdminstratorDto): Promise<import("src/adminstrators/interface/adminstrators.interface").IAdminstrator>;
    remove(id: string): Promise<import("src/adminstrators/interface/adminstrators.interface").IAdminstrator>;
}

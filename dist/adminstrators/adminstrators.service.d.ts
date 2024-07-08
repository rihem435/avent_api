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
import { CreateAdminstratorDto } from './dto/create-Adminstrator.dto';
import { UpdateAdminstratorDto } from './dto/update-Adminstrator.dto';
import { IAdminstrator } from './interface/adminstrators.interface';
import { Model } from 'mongoose';
export declare class AdminstratorsService {
    private AdminstratorModel;
    constructor(AdminstratorModel: Model<IAdminstrator>);
    createAdminstrator(createAdminstratorDto: CreateAdminstratorDto): Promise<IAdminstrator>;
    updateAdminstrator(AdminstratorId: string, updateAdminstratorDto: UpdateAdminstratorDto): Promise<IAdminstrator>;
    getAllAdminstrator(): Promise<IAdminstrator[]>;
    getAdminstrator(AdminstratorId: string): Promise<IAdminstrator>;
    deleteAdminstrator(AdminstratorId: string): Promise<IAdminstrator>;
}

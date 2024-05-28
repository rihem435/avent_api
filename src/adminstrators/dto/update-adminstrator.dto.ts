import { PartialType } from '@nestjs/mapped-types';
import { CreateAdminstratorDto } from './create-adminstrator.dto';

export class UpdateAdminstratorDto extends PartialType(CreateAdminstratorDto) {}

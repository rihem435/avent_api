import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateAdminstratorDto } from './dto/create-Adminstrator.dto';
import { UpdateAdminstratorDto } from './dto/update-Adminstrator.dto';
import { InjectModel } from '@nestjs/mongoose';
import { IAdminstrator } from './interface/adminstrators.interface';
import { Model, deleteModel } from 'mongoose';
import { UpdatePasswordDto } from './dto/update-pass.dto';
import * as argon2 from "argon2";
@Injectable()
export class AdminstratorsService {
  constructor (@InjectModel('users') private AdminstratorModel: Model<IAdminstrator>) {}
  async createAdminstrator(createAdminstratorDto: CreateAdminstratorDto): Promise<IAdminstrator> {
    const newAdminstrator = await new this.AdminstratorModel(createAdminstratorDto);
    return newAdminstrator.save();
  }
  async updateAdminstrator(AdminstratorId: string, updateAdminstratorDto: UpdateAdminstratorDto): Promise<IAdminstrator> {
    const existingAdminstrator = await this.AdminstratorModel.findByIdAndUpdate(AdminstratorId, updateAdminstratorDto, {new: true});
    if (!existingAdminstrator) {
      throw new NotFoundException('Adminstrator #${AdminstratorId} not found');
    }
      return existingAdminstrator;
  }
  async getAllAdminstrator(): Promise <IAdminstrator[]> {
    const AdminstratorData = await this.AdminstratorModel.find({role:"Adminstrator"});
      if (!AdminstratorData || AdminstratorData.length == 0) {
        throw new NotFoundException('Adminstrator data not found!');
      }
        return AdminstratorData;
}
  async getAdminstrator (AdminstratorId: string): Promise<IAdminstrator> {
    const existingAdminstrator= await this.AdminstratorModel.findById(AdminstratorId).exec();
      if (!existingAdminstrator) {
        throw new NotFoundException(`Adminstrator #${AdminstratorId} not found`);
      }
        return existingAdminstrator;
}
  async deleteAdminstrator(AdminstratorId: string): Promise<IAdminstrator> {
    const deleteAdminstrator = await this.AdminstratorModel.findByIdAndDelete(AdminstratorId);
      if (!deleteAdminstrator) {
        throw new NotFoundException('User #${UserId} not found');
      }
          return deleteAdminstrator;
  }
   /*-- Déclaration de la fonction de cryptage "hash_data"  ytilisant le processus de la méthode / technique "hashage" prédéfinit  --*/
   hash_Data(data: string) { return argon2.hash(data).then(hash => { console.log('Generated hash:', hash); return hash; }); }
      async updatePassword(adminId: string, updatePasswordDto: UpdatePasswordDto): Promise<void> {
        const { oldPassword, newPassword } = updatePasswordDto;
        const admin = await this.AdminstratorModel.findById(adminId);
        if (!admin) {
          throw new BadRequestException('Admin not found');
        }
        console.log('Current password hash:', admin.user_password);
        const isOldPasswordValid = await argon2.verify(admin.user_password, oldPassword);
        if (!isOldPasswordValid) {
          throw new BadRequestException('Old password is incorrect');
        }
        const newHashedPassword = await this.hash_Data(newPassword);
        admin.user_password = newHashedPassword;
        await admin.save();
      }
}








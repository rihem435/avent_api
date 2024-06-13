import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IUser } from './interface/users.interface';
import * as nodemailer from 'nodemailer';

@Injectable()
export class UsersService {

  /*-- Déclaration de ma méthode de la technique du transporter  --*/
  private transporter: nodemailer.Transporter;

  constructor(@InjectModel('users') private UserModel: Model<IUser>) {

    // Configure the Nodemailer transporter
    this.transporter = nodemailer.createTransport({
      // Set up your email provider's SMTP settings here
      // For example, if you're using Gmail, you can use the following configuration:
      service: 'gmail',
      auth: {
        user: 'tekaya.taoufik.mohamed@gmail.com',
        pass: 'lpyj uxmk yrmm xrcn',
      },
    });
  }

  async createUser(createUserDto: CreateUserDto): Promise<IUser> {

    const newUser = await new this.UserModel(createUserDto);
    return newUser.save();

  }

  async findByUsername(user_name: string): Promise<IUser> {
    return this.UserModel.findOne({ user_first_name: user_name }).exec();
  }


  async findByEmail(email: string): Promise<IUser> {
    return this.UserModel.findOne({ user_email: email }).exec();
  }



  async updateUser(UserId: string, updateUserDto: UpdateUserDto): Promise<IUser> {
    const existingUser = await this.UserModel.findByIdAndUpdate(UserId, updateUserDto, { new: true });

    if (!existingUser) {
      throw new NotFoundException('User #${UserId} not found');
    }
    return existingUser;
  }

  async getAllUser(): Promise<IUser[]> {
    const UserData = await this.UserModel.find();
    if (!UserData || UserData.length == 0) {
      throw new NotFoundException('Users data not found!');
    }
    return UserData;
  }

  async getUser(UserId: string): Promise<IUser> {
    const existingUser = await this.UserModel.findById(UserId).exec();
    if (!existingUser) {
      throw new NotFoundException(`User #${UserId} not found`);
    }
    return existingUser;
  }

  async deleteUser(UserId: string): Promise<IUser> {
    const deleteUser = await this.UserModel.findByIdAndDelete(UserId);
    if (!deleteUser) {
      throw new NotFoundException('User #${UserId} not found');
    }
    return deleteUser;
  }

  async sendMail(to: string, from: string, subject: string, content: string): Promise<void> {
    const code = Math.floor(Math.random() * 1000000);
    const existingUser = await this.UserModel.findOne({ user_email: to }).exec();
    if (!existingUser) {
      throw new NotFoundException(`User #${to} not found`);
    }
    await this.UserModel.updateOne({ user_email: to }, { $set: { user_code: code } });
    const mailOptions: nodemailer.SendMailOptions = {
      from: from,
      to,
      subject,
      text: " votre code est " + code,
    };
    console.log(`code ${code}`)
    await this.transporter.sendMail(mailOptions);
  }

  async verifyUserByCode(code: string): Promise<IUser> {
    const existingUser = await this.UserModel.findOne({ user_code: code }).exec();
    if (!existingUser) {
      throw new NotFoundException(`User #${code} not found`);
    }
    return existingUser;
  }


  async confirmation_user_account(id: string): Promise<IUser> {
    const user = await this.UserModel.findByIdAndUpdate(id, { $set: { verified: true } })


    const mailOptions: nodemailer.SendMailOptions = {

      from: "tekaya.taoufik.mohamed@gmail.com",
      to: user.user_email,

      subject: "confirmation account",

      text: " Your user account has been approuved by the application admin ",
    };

    await this.transporter.sendMail(mailOptions);
    console.log("first")


    return user;

  }
  async updatePassword(userId: string, newPassword: string): Promise<void> {
    // Recherchez l'utilisateur par son ID
    const utilisateur = await this.UserModel.findById(userId);

    // Vérifiez si l'utilisateur existe
    if (!utilisateur) {
      throw new Error('Utilisateur non trouvé');
    }

    // Mettre à jour le mot de passe de l'utilisateur
    utilisateur.user_password = newPassword;
    await utilisateur.save();
  }

}

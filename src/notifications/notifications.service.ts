import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { UpdateNotificationDto } from './dto/update-notification.dto';
import { InjectModel } from '@nestjs/mongoose';
import { INotification } from './interface/notifications.interface';
import { Model } from 'mongoose';
import * as admin from "firebase-admin";

@Injectable()
  export class NotificationsService {

    private readonly admin: admin.app.App;

      constructor (@InjectModel('notifications') private NotificationModel: Model <INotification> ) {
        
        /* -- const serviceAccount = require("../../upload/projetpfe-296a2-firebase-adminsdk-c8eoo-ff80a11366.json");
          this.admin = admin.initializeApp({
             credential: admin.credential.cert(serviceAccount),
      // Other options if necessary
           });
    //this.admin = admin;  -- */
        }
      

        async createNotification(createNotificationDto: CreateNotificationDto): Promise <INotification> {
      
        const newNotification = await new this.NotificationModel(createNotificationDto);

          return newNotification.save();
  
      }

  async updateNotification(NotificationId: string, updateNotificationDto: UpdateNotificationDto): Promise <INotification> {
    const existingNotification = await this.NotificationModel.findByIdAndUpdate(NotificationId, updateNotificationDto, {new: true});
  
    if (!existingNotification) {
      throw new NotFoundException('Notification #${NotificationId} not found');
    }
      return existingNotification;
  }
  
  async getAllNotification(): Promise<INotification[]> {
    const NotificationData = await this.NotificationModel.find();
      if (!NotificationData || NotificationData.length == 0) {
        throw new NotFoundException('Notification data not found!');
      }
        return NotificationData;
}

  async getNotification (NotificationId: string): Promise<INotification> {
    const existingNotification = await this.NotificationModel.findById(NotificationId).exec();
      if (!existingNotification) {
        throw new NotFoundException(`Notification #${NotificationId} not found`);
      }
        return existingNotification;
}

  async deleteNotification(NotificationId: string): Promise <INotification> {
    const deleteNotification = await this.NotificationModel.findByIdAndDelete(NotificationId);    
      if (!deleteNotification) {
        throw new NotFoundException('Notification #${NotificationId} not found');
      }
          return deleteNotification;

  }

  /*-- async sendNotification(
    title: string,
    body: string,
    token: string,
  ): Promise<any> {
    const message = {
      notification: {
        title: title,
        body: body,
      },

      token: token,
    };

    try {
      const response = await this.admin.messaging().send(message);
      console.log("Notification sent successfully:", response);
      return response;

    } 
    
    catch (error) {
      console.error("Error sending notification:", error);
      throw error;
    }
    
  } --*/

}

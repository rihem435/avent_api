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
import { CreateNotificationDto } from './dto/create-notification.dto';
import { UpdateNotificationDto } from './dto/update-notification.dto';
import { INotification } from './interface/notifications.interface';
import { Model } from 'mongoose';
export declare class NotificationsService {
    private NotificationModel;
    private readonly admin;
    constructor(NotificationModel: Model<INotification>);
    createNotification(createNotificationDto: CreateNotificationDto): Promise<INotification>;
    updateNotification(NotificationId: string, updateNotificationDto: UpdateNotificationDto): Promise<INotification>;
    getAllNotification(): Promise<INotification[]>;
    getNotification(NotificationId: string): Promise<INotification>;
    deleteNotification(NotificationId: string): Promise<INotification>;
}

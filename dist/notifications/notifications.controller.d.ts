import { NotificationsService } from './notifications.service';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { UpdateNotificationDto } from './dto/update-notification.dto';
export declare class NotificationsController {
    private readonly notificationsService;
    constructor(notificationsService: NotificationsService);
    createNotification(createNotificationDto: CreateNotificationDto): Promise<import("src/notifications/interface/notifications.interface").INotification>;
    getAllNotification(): Promise<import("src/notifications/interface/notifications.interface").INotification[]>;
    getNotification(id: string): Promise<import("src/notifications/interface/notifications.interface").INotification>;
    updateNotification(id: string, updateNotificationDto: UpdateNotificationDto): Promise<import("src/notifications/interface/notifications.interface").INotification>;
    deleteNotification(id: string): Promise<import("src/notifications/interface/notifications.interface").INotification>;
}

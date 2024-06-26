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
import { Document, Types } from "mongoose";
export declare class EventEntity {
    event_title: string;
    event_galleries: string[];
    event_date: string;
    event_time: string;
    event_address: string;
    event_description: string;
    event_latitude_coordinates: string;
    event_longitude_coordinates: string;
    user_id: Types.ObjectId;
    invitations: Types.ObjectId[];
    comments: Types.ObjectId[];
}
export declare const EventSchema: import("mongoose").Schema<EventEntity, import("mongoose").Model<EventEntity, any, any, any, Document<unknown, any, EventEntity> & EventEntity & {
    _id: Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, EventEntity, Document<unknown, {}, import("mongoose").FlatRecord<EventEntity>> & import("mongoose").FlatRecord<EventEntity> & {
    _id: Types.ObjectId;
}>;

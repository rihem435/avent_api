import {Document} from "mongoose";

export interface IEvent extends Document {
   readonly event_name: string;

   readonly event_place: string;

   readonly event_galleries: string;

   user_id: string;

}
import { IComment } from "./IComment";

export interface IMoment {
  _id?: string;
  uuid?: string;
  title: string;
  description: string;
  image: string;
  createdAt?: string;
  updatedAt?: string;
}

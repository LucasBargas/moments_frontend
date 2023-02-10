import { IComment } from "./IComment";

export interface IMoment {
  _id?: string;
  uuid?: string;
  title: string;
  description: string;
  image: string;
  comments?: { name: string; text: string }[];
  createdAt?: string;
  updatedAt?: string;
}

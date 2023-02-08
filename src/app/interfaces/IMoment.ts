import { IComment } from "./IComment";

export interface IMoment {
  _id?: string;
  title: string;
  description: string;
  image: string;
  comments?: IComment[];
  createdAt?: string;
  updatedAt?: string;
}

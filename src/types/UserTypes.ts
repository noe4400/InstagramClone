import {IPost} from './PostTypes';

export interface IUser {
  id: string;
  username: string;
  image?: string;
  name: string;
  bio?: string;
  posts?: IPost[];
  website?: string;
}

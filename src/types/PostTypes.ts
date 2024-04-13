import {IComment} from './CommentTypes';
import {IUser} from './UserTypes';

export interface IPost {
  id: string;
  createdAt: string;
  image?: string;
  images?: string[];
  video?: string;
  description: string;
  user: IUser;
  nofComments: number;
  nofLikes: number;
  comments: IComment[];
}

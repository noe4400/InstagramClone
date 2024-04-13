import {IUser} from './UserTypes';

export interface IComment {
  id: string;
  comment: string;
  user: IUser;
}

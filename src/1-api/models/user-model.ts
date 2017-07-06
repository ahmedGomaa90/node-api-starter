import { IBaseModel } from './bsae-model/base-model';

export interface IUserModel extends IBaseModel{
    username: string;
    password?: string;
    
}
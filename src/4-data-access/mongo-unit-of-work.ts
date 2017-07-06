import { IUnitOfWork } from '../3-domain/domain-module';
import { Model } from './models/model';
import * as mongoose from 'mongoose';
export interface IMongoUnitOfWork extends IUnitOfWork {
    createModel<T>(): Model<T>;

    // users: mongoose.Model<Model<IUser>>;

}
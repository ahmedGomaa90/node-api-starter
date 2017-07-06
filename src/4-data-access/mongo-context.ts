import * as mongoose from 'mongoose';
import { Model } from './models/model';
import { userSchema } from './schemas/schemas.module';
import { IMongoUnitOfWork } from './mongo-unit-of-work';
import { Service } from 'typedi';
import * as promise from 'bluebird';
import { ConfigService } from '../5-cross-cutting/cross-cutting.module';

export class MongoContext implements IMongoUnitOfWork {

    private connectionString = ConfigService.config.db.mongoConnectionString;
    
    connection: mongoose.Connection = mongoose.createConnection(this.connectionString,{
        promiseLibrary: promise
    });

    createModel<T>(): Model<T> {
        let entity = this.connection.model<Model<T>>(userSchema.collectionName, userSchema.schema);

        return new entity();

    }


    commit(): void {
        throw new Error("Method not implemented.");
    }

    users: mongoose.Collection;
}
import { IRepo, BaseEntity } from '../../3-domain/domain-module';
import { IMongoUnitOfWork } from '../mongo-unit-of-work';
import { Inject } from 'typedi';
import { dependcies } from '../../5-cross-cutting/cross-cutting.module';
import * as mongodb from 'mongodb';
import * as bluebird from 'bluebird';
import { Model } from '../models/model';

export class Repo<T extends BaseEntity> implements IRepo<T>{

    @Inject(dependcies.unitOfWork)
    private mongoUnitOfWork: IMongoUnitOfWork;

    constructor() { }

    add(entity: T) {

        return this.createSet().collection.insertOne(entity)
            .then((result: mongodb.InsertOneWriteOpResult) => {
                entity.id = result.insertedId;
                return entity;
            })
    }

    find(entity: T): Promise<T> {

        return this.createSet().collection.findOne(entity.id);

    }



    createSet(): Model<T> {
        return this.mongoUnitOfWork.createModel<T>();
    }

}
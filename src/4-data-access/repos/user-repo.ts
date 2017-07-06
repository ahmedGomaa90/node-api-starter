import { IUserRepo, User } from '../../3-domain/domain-module';
import { Repo } from './repo';
import { Service } from 'typedi';
import { dependcies } from '../../5-cross-cutting/cross-cutting.module';

export class UserRepo extends Repo<User> implements IUserRepo {

    findByUserName(user: User): Promise<User> {

        return this.createSet().collection.findOne({ username: user.username });
    }

}
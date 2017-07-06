import { IRepo } from '../repo-contract';
import { User } from '../../entities/entities.module';

export interface IUserRepo extends IRepo<User> {
    findByUserName(user: User): Promise<User>;
}
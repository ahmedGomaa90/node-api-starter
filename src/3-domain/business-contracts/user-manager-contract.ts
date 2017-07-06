import { User } from '../entities/entities.module';

export interface IUserManager {
    registerUser(user: User): Promise<User>;

    validateUser(user: User): Promise<boolean>;
}
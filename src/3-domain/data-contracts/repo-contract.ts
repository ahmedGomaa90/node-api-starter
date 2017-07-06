import { BaseEntity } from '../../3-domain/domain-module';

export interface IRepo<T extends BaseEntity> {

    add(entity: T): Promise<T>;

    find(entity: T): Promise<T>
}

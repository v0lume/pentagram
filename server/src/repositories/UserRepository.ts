import { EntityRepository, Repository } from 'typeorm';

import { User } from '../entities/User';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
    findByUsername(username: string): Promise<User | undefined> {
        return this.findOne({ username });
    }

    createAndSave(attrs) {
        //const entity = this.create(attrs);
        const entity = new User();
        entity.password = attrs.password;

        return this.save(entity);
    }
}
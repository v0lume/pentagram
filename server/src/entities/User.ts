import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';
import * as passwordHash from 'password-hash';

@Entity({ name: 'users' })
export class User {
    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    email: string;

    @Column()
    fullname: string;

    @Column()
    username: string;

    @Column({ name: 'password' })
    _password: string;

    get password(): string {
        return this._password;
    }

    set password(value:string) {
        this._password = passwordHash.generate(value);
        console.log(this._password);
    }
}
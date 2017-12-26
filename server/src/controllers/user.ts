import { getCustomRepository } from 'typeorm';
import { UserRepository } from '../repositories/UserRepository';
import {User} from '../entities/User';

class UserController {
    static index(req, res) {
        console.log('user ok');

        const userRepo = getCustomRepository(UserRepository);

        const user = new User();
        user.fullname = 'fullname';
        user.email = 'sdf@sdf.ru';
        user.username = 'test';
        user.password = '234sdfsdf';

        userRepo.save(user);
    }

    static login(req, res) {
        //TODO: return user token
        console.log(req.user);
    }

    static signup(req, res) {

    }
}

export default UserController;
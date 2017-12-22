import { passport } from '../passport';

import UserController from '../controllers/user';

export default router => {
    router.get('/user', UserController.index);
    router.post('/user/login', passport.authenticate('local', { session: false }), UserController.login);
    router.post('/user/signup', UserController.signup);
};
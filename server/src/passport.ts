import * as passport from 'passport';
import * as passportLocal from 'passport-local';

passport.use(new passportLocal.Strategy((username: string, password: string, cb) => {
    //TODO: get user from db
    return cb(null, {name: 'Test', suname: 'Tester'});
}));

export { passport };
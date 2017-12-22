class UserController {
    static index(req, res) {
        console.log('user ok');
    }

    static login(req, res) {
        //TODO: return user token
        console.log(req.user);
    }

    static signup(req, res) {

    }
}

export default UserController;
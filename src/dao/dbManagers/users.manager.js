import { usersModel } from './models/users.model.js';

export default class Users {
    constructor() {
        console.log('Working users with DB');
    }
    async getAll() {
        return usersModel.find().lean();
    }

    async getByEmail(email) {
        return usersModel.findOne({email}).lean();
    }

    async save(user) {
        usersModel.create(user);
        return user;
    }
}
import Sequelize, {Model} from 'sequelize'

class User extends Model {
    static init(sequelize) {
        return super.init({
            name: {
                type: Sequelize.STRING
            },
            lastName: {
                type: Sequelize.STRING
            },
            email: {
                type: Sequelize.STRING
            }
        }, {
            sequelize,
            modelName: 'user'
        })
    }

    static findAllUsers() {
        return this.findAll();
    }

    static findUserByEmail(email) {
        return this.findOne({where: {email}})
    }

    static saveUserToDb(user) {
        return this.create(user);
    }
}

export default User
import Sequelize, {Model} from 'sequelize'

class Post extends Model {
    static init(sequelize) {
        return super.init({
            name: {
                type: Sequelize.STRING
            },
            comment: {
                type: Sequelize.STRING
            }

        }, {
            sequelize,
            modelName: 'post'
        })
    }

    static associate(models) {
        this.belongsTo(models.user);
    }

    static findAllPosts() {
        return this.findAll();
    }

    static findPostById(id) {
        return this.findByPk(id);
    }

    static savePostToDb(post) {
        return this.create(post);
    }
}

export default Post
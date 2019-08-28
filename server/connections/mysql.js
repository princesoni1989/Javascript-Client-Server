import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';
import UserModel from '../client/user/model'
import PostModel from '../client/post/model'

const sequelize = new Sequelize('sql_node', 'admin', 'new-password', {
    host: 'database-2.cbq4sukqfpzg.us-east-1.rds.amazonaws.com',
    dialect: 'mysql',
    port: 3306,
    logging: console.log
});

PostModel.init(sequelize)
UserModel.init(sequelize)

const models = {
    'user': UserModel,
    'post': PostModel
}

// create associations between models
for (const model of Object.keys(models)) {
    typeof models[model].associate === 'function' && models[model].associate(models);
}
models.sequelize = sequelize;
export default models;

const Model = require('sequelize');
const Datatypes = require('sequelize');
const bcryp = require('bcrypt');
const sequelize = require('../config/connection');

class User extends Model {
    verifyPassword(loginPASS) {
        return bcrypt.compareSync(loginPASS, this.password);
    }
};

User.init ({
    id: {
        type: Datatypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    username: {
        type: Datatypes.STRING,
        allowNull: false,
    },
    email: {
        type: Datatypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        },
    }
},
{
    hooks: {
        async hashPass(userData) {
            userData.password = await bcrypt.hash(userData.password, 10);
            return userData;
        },
    },
    sequelize, 
    timestamps: false, 
    freezeTableName: true, 
    underscored: true, 
    modelName: 'user',
});

module.exports = User;
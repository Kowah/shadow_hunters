const data = require('../connection');
const Sequelize = require('sequelize');
const Role = require('./role');

const Character = data.define('characters', {
    // attributes
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    hp: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    victory: {
        type: Sequelize.STRING,
        allowNull: false
    },
    ability_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    ability_description: {
        type: Sequelize.STRING,
        allowNull: false
    },
    ability_unique: {
        type: Sequelize.STRING,
        allowNull: false
    },
}, {
    timestamps: false,
    underscored: true,
});

Character.belongsTo(Role);

module.exports = Character;
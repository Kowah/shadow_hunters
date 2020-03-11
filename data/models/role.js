const data = require('../connection');
const Sequelize = require('sequelize');

const Role = data.define('role', {
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
    color: {
        type: Sequelize.STRING,
        allowNull: false
    },
}, {
    timestamps: false,
});

module.exports = Role;
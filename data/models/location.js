const data = require('../connection');
const Sequelize = require('sequelize');
const Locationdice = require('./locationdice');

const Location = data.define('location', {
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
    description: {
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

Location.hasMany(Locationdice);

module.exports = Location;
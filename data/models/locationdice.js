const data = require('../connection');
const Sequelize = require('sequelize');

const Locationdice = data.define('locationdice', {
    // attributes
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    value: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
}, {
    timestamps: false,
    underscored: true,
});


data.sync().then(() => {
});

module.exports = Locationdice;
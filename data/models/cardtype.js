const data = require('../connection');
const Sequelize = require('sequelize');

const Cardtype = data.define('cardtype', {
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
}, {
    timestamps: false,
});

data.sync().then(() => {
});

module.exports = Cardtype;
const data = require('../connection');
const Sequelize = require('sequelize');
const Cardtype = require('./cardtype');

const Card = data.define('card', {
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
    vision_consequency: {
        type: Sequelize.STRING,
        allowNull: false
    },
    equipment: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
}, {
    timestamps: false,
    underscored: true
});

Card.belongsTo(Cardtype);

data.sync().then(() => {
});

module.exports = Card;
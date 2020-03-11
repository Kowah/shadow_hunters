const data = require('../connection');
const Sequelize = require('sequelize');
const Chance = require('chance');

const Player = data.define('player', {
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
    ip: {
        type: Sequelize.STRING,
        allowNull: false
    },
}, {
    timestamps: false,
});

Player.addHook('beforeValidate', (player, options) => {
    if(!player.name){
        player.name = new Chance().name({ nationality: 'en' });
    }
});

module.exports = Player;
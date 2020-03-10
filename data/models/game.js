const data = require('../connection');
const Sequelize = require('sequelize');
const Chance = require('chance');

const Game = data.define('game', {
    // attributes
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    publicId: {
        type: Sequelize.STRING,
        //allowNull: false
    },
}, {
    timestamps: false,
});

Game.addHook('beforeValidate', (game, options) => {
    let chance = new Chance();
    console.log('test');
    if(!game.publicId)
        game.publicId = chance.guid();
});


data.sync().then(() => {});

module.exports = Game;
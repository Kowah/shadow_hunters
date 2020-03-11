const data = require('../connection');
const Sequelize = require('sequelize');
let Game = require('./game');
let Player = require('./player');

const Connection = data.define('connection', {
    // attributes
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
}, {
    timestamps: false,
    underscored: true
});

Connection.belongsTo(Game);
Connection.belongsTo(Player);

Game.hasMany(Connection);
Player.hasMany(Connection);

module.exports = Connection;
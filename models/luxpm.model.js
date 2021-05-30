const { sequelize, Sequelize } = require("../config/sequelize");

module.exports = (sequelize, Sequelize) => {
    const Luxpm = sequelize.define("luxpm", {
        letter: {
            type: Sequelize.STRING
        }
    });
    return Luxpm;
};
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('match', {
        id_match: {
            type: DataTypes.BIGINT,
            allowNull: false,
            unique: true,
            primaryKey: true,
            autoIncrement: true,        
        },
        results: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        winner: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        loser: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false
        },
    },
    {
        timestamps: false,
    }
    );
};

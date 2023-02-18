module.exports = (sequelize, DataTypes) => {
    const GymUsage = sequelize.define(
        "GYMUSAGE",
        {
            gId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
            },
            date_time: {
                type: DataTypes.DATE,
            },
            users_in: {
                type: DataTypes.INTEGER,
            },
        },
        {
            timestamps: false,
            freezeTableName: true
        }
    )
    return GymUsage;
}
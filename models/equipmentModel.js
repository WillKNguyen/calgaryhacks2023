module.exports = (sequelize, DataTypes) => {
    const Equipment = sequelize.define(
        "EQUIPMENT",
        {
            eId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
            },
            name: {
                type: DataTypes.STRING,
            },
            isAvailable: {
                type: DataTypes.BOOLEAN,
            },
            needsMaintenance: {
                type: DataTypes.BOOLEAN,
            },
        },
        {
            timestamps: false,
            freezeTableName: true
        }
    )
    return Equipment;
}
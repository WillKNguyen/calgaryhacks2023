module.exports = (sequelize, DataTypes) => {
    const EquipmentUsage = sequelize.define(
        "EQUIPMENTUSAGE",
        {
            eId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
            },
            start_time: {
                type: DataTypes.DATE,
            },
            end_time: {
                type: DataTypes.DATE,
            },
        },
        {
            timestamps: false,
            freezeTableName: true
        }
    )
    return EquipmentUsage;
}
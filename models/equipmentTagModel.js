module.exports = (sequelize, DataTypes) => {
    const EquipmentTag = sequelize.define(
        "EQUIPMENTTAG",
        {
            eId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
            },
            tag: {
                type: DataTypes.STRING,
            },
        },
        {
            timestamps: false,
            freezeTableName: true
        }
    )
    return EquipmentTag;
}
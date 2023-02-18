module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define(
        "USERS",
        {
            UserId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
            },
            username: {
                type: DataTypes.STRING,
            },
            email: {
                type: DataTypes.STRING,
            },
            password: {
                type: DataTypes.STRING,
            },
        },
        {
            timestamps: false,
        }
    )
    return Users;
}
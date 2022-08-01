module.exports = (sequelize, DataTypes)=>{
    const Users = sequelize.define('Users', {
      id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey: true
      },
      fName: {
        type: DataTypes.STRING
      },
      lName: {
        type: DataTypes.STRING
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true
      },
      password: {
        type: DataTypes.STRING
      },
    },
    );
    return Users;
  };
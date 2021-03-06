'use strict';

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    emailAddress: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  })

  // { sequelize });

  User.associate = (models) => {
    
    User.hasMany(models.Course, {
      // as: 'user',
      foreignKey: {
        fieldName: 'userId',
        allowNull: false,
      }
    });
  }
  // module.exports = User;

  return User;
};
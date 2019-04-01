'use strict';
const bcrypt = require('bcryptjs')
const { Op } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: 'Invalid email format!'
        },
        checkEmpty(email) {
          if (!email) throw new Error('Email is required!')
        },
        isUnique(email) {
          return User
            .findOne({
              where: {
                email: email,
                id: {
                  [Op.ne]: this.id
                }
              }
            })
            .then((findOneUser) => {
              if (findOneUser) throw new Error('Email is already registered! Please try another one.')
            })
        }
      },
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        checkEmpty(password) {
          if (!password) throw new Error('Password is required!')
        }
      }
    },
    role: {
      type: DataTypes.STRING,
      validate: {
        checkEmpty(role) {
          if (!role) throw new Error('Role is required!')
        }
      }
    }
  }, {
      hooks: {
        beforeCreate: (user) => {
          //HASH PASSWORD
          const salt = bcrypt.genSaltSync();
          user.password = bcrypt.hashSync(user.password, salt)

          //RE-FORMAT DETAILS
          user.email = user.email.toLowerCase()
        },
        beforeUpdate: (user) => {
          //HASH PASSWORD
          const salt = bcrypt.genSaltSync();
          user.password = bcrypt.hashSync(user.password, salt)
        }
      }
    });
  User.associate = function (models) {
    // associations can be defined here
  };

  User.prototype.validatePassword = function (password) {
    return bcrypt.compareSync(password, this.password);
  }

  return User;
};
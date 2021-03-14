const { Model, DataTypes } = require('sequelize');

class MedicinalPlan extends Model {
  static init(sequelize) {
    super.init({
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'Este campo não pode ser vazio',
          },
          max: {
            msg: 'Este campo deve ter até 250 caracteres',
          },
        },
      },
      active: DataTypes.BOOLEAN,
    },
    {
      sequelize,
    });
  }
}
module.exports = MedicinalPlan;

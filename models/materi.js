'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Materi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Materi.init({
    materiName: DataTypes.STRING,
    CourseId: DataTypes.INTEGER,
    InstructorId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Materi',
  });
  return Materi;
};
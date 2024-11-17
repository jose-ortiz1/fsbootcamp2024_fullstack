//create the employee module
const { sequelize, Sequelize } =  require("../connection");
const Employee = sequelize.define('employee', {
    id :{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull:false

    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,

    },
    salary: {
        type: Sequelize.FLOAT,
        allowNull: true,
    }
});

module.exports = Employee;
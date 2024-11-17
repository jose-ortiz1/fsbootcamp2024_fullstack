const express = require('express');
const app = express();
const { sequelize } = require("./connection");

const Department = require("./models/department");
const Employee = require("./models/employee");

const employee_router = require("./routers/employee");

app.use(express.json());
app.use('/employees/', employee_router);

Department.hasMany(Employee, {
    foreignKey: {
        name: "department_id",
    }
});
Employee.belongsTo(Department, {
    foreignKey: {
        name: "department_id",
    }

});


//{force:true}
sequelize.sync().then((response) => {
    //console.log(response);
}).catch((err) => {
    console.log(err);
})  

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
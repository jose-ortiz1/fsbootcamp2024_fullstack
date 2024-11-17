const Employee = require('../models/employee');
const router = require('express').Router();

router.post('/add_employee', async function (req, res){
    const {name, salary} = req.body;
    const data = await Employee.create({name: name, salary: salary});
    res.json(data);


})

router.get('/get_employees/', async function (req, res){
    // Get all employees from the database
    try {
        const data = await Employee.findAll();
        return res.json(data);
    } catch (errors) {
        return res.json(errors);
    }
})

router.get('/get_employees/:id', async function (req, res){
    // Get employee by Id
        await Employee.findAll({
            where: {
                id: req.params.id
            }
        }).then((data) => {
            if (data.length > 0) {
                res.json(data);
            }else {
                res.json('No Employee found');
            }
        }).catch ((errors) => {
         res.json(errors);
        });
})

router.patch('/update_employee/:id', async (req, res) =>{
    const employee_id = req.params.id;

    try {
        const employee = await Employee.findByPk(employee_id)
        if(employee){
            for(let i in req.body){
                // console.log(i); //column  
                // console.log(employee[i]); //data form data base
                // console.log(req.body[i]); //data in the request body
                employee[i] = req.body[i];
            }
            employee.save();
        }
        res.json(employee);

    } catch (err) {
        console.log(err);
        res.json(err);
    }

})

router.delete('/delete_employee/:id', async (req,res) => {
    // Delete employee by Id

    try{
        const data = await Employee.destroy({
            where: {
                id: req.params.id
            }
        });
        if (data == 1){
            res.json('Employee deleted successfully');
        } else {
            res.json('No Employee found');
        }
    } catch (errors){
        console.log(errors)
        res.json(errors);
    }

})
    


module.exports = router;

// const jane = await Employee.create({ firstName: 'Jane', lastName: 'Doe' });

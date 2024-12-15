const express = require('express');
const app = express();
const connection = require('./connection');
const port = 3000;
const cors = require('cors');

app.use(express.json());

app.use(cors());
app.use((req, res, next) => {
    console.log('Coming in the middleware');
    next();
})

app.get('/', (req, res) => {
    res.send('Hello world');
})

app.get('/employees/', async (req, res) => {
    try {
        const [data, fields] = await connection.promise().query('SELECT * FROM fsbootcamp2024.employees');
        return res.json(data);
    } catch (errors) {
        res.send(errors);
    }
})

//Task create an api to get all the departments - 5 mins
app.get('/departments/', async (req, res) => {
    try {
        const [data, fields] = await connection.promise().query('SELECT * FROM fsbootcamp2024.departments');
        return res.json(data);
    } catch (errors) {
        res.send(errors);
    }
})

//get employees by id
app.get('/employees/:id', async (req, res) => {
    const employee_id = req.params.id;
    try {
        const [data, fields] = await connection.promise().query(`
            SELECT * 
            FROM fsbootcamp2024.employees 
            WHERE employee_id = ?`, employee_id);
            if(data.length > 0){
                return res.json(data);
            } else {
                return res.json([]);
            }
    } catch (errors){
        res.send(errors);
    }
})

app.post('/employees/', async (req, res) => {
    // const first_name = req.body.first_name;
    // const last_name = req.body.last_name;
    // const department_id = req.body.department_id;
    var {firstName, lastName, department, salary, email, password} = req.body;
    if (!firstName || !department) return res.send('Please provide the first name and department_id'); 

    if (!email || !password) return res.send('Please provide the email and password'); 

    if(lastName == ''){
        lastName = '';
    }
    if(salary == ''){
        salary = 0;
    }

    try{
        const [data] = await connection.promise().query(
            `INSERT INTO fsbootcamp2024.employees (first_name, last_name, department_id, salary, email, password)
            VALUES (?, ?, ?, ?, ?, ?)`,[firstName, lastName,  department, salary, email, password,]);
            if(data.affectedRows > 0){
               return res.json('Employee cretaed successfully')
            }else{
                return res.json('Employee not created')
            }
    }catch(errors) {
        res.send(errors);
    }
})

app.put('/employees/update/:id', async (req, res) => {
    const employee_id = req.params.id;
    const {firstName, lastName, email, password, salary, department } = req.body;

    try{
        const [data] = await connection.promise().query(`
            UPDATE fsbootcamp2024.employees
            SET first_name =?, last_name =?, email=?, password=?, salary =?, department_id =?
            WHERE employee_id =?`, [firstName,lastName,email, password, salary,department,employee_id])
        res.json(data);
    }catch(errors){
        res.json(errors);
    }
});


//delete employees based on their id
app.delete('/employees/delete/:id', async(req, res) => {
    const employee_id = req.params.id;

    try {
        const [data] = await connection.promise().query("DELETE FROM fsbootcamp2024.employees WHERE employee_id = ?", employee_id);
        if(data.affectedRows > 0) {
            return res.json({status:"success"});    
        } else {
            return res.json('Employee not found');
        }
    } catch (errors) {
        res.json(errors);
    }
    
})


// To do:
// get departments based on id
//delete departments based on id


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})
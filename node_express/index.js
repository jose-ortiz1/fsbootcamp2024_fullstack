const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const customers = [
    { id: 1, name: 'Harsh', age: 28},
    { id: 2, name: 'Test', age: 30},
    { id: 3, name: 'Sam', age: 38},
    { id: 4, name: 'George', age: 23},
];

app.get('/customers', (request, response) => {
    if(!customers) return response.status(200).send('No customer found');
    return response.send(customers);
})

app.get('/customers/:id', (request, response) => {
    var customer_id = request.params.id; 
    var customer = customers.find(x => x.id == customer_id);
    if(!customer) return response.status(200).send('No customer found')
    return response.send(customer);
})

app.post('/customers', (request, response) => {
    // if(request.body.name == '' || request.body.id == '') response.send("Please provide all the values");
    // or this is another way v v of writing above
    if(!request.body.name) return response.send("Please provide the name");
    //add the insert logic for customers
    var customer = {
        id: customers.length + 1,
        name: request.body.name,
        age: request.body.age
    }

    customers.push(customer);
    return response.send(customers);
})

app.delete('/delete_customer/:id', (request, response) =>{
    let customer_id = request.params.id;
    let customer = customers.find(x => x.id == customer_id);
    if(!customer) return response.send('Customer not found');

    let index = customers.indexOf(customer);
    customers.splice(index,1);
    return response.send(customers);
})

app.put('/update_customer/:id/', (request, response) => {
    let customer_id = request.params.id;
    if(!request.body.name) return response.send('Please provide updated name for the customer');
    let customer = customers.find(x => x.id == customer_id)
    if(!customer) return response.send('Customer not found');
    customer.name = request.body.name;
    return response.status(200).json(customer);
})

//show the middleware example as well for tomorrow.

app.listen(port, () => {
    console.log('Running or Listening on port ' + port)
})

//explain about:
// get, post, put, delete
//explain why we need postman
//explain about different status.
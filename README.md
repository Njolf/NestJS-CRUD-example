<h1>A simple CRUD NestJS app using MongoDB.</h1>

<h2>Creating an employee:</h2>
  You can create a new employee by sending a POST request to /employees, with all of the necessary data in the  
  request's body:

  Name,  
  Email Address,  
  Phone Number,  
  City,  
  Zip Code,   
  Address Line 1,  
  Address Line 2 (optional),  
  Date of Employment,  
  Date of Birth  

  <h3><i>example request:</i></h3>
  <b>POST /employees</b>
  
  ``` json
  "body": {
    "name": "John Doe",
    "emailAddr": "johnDoe@example.com",
    "phNumber": "0634511324",
    "city": "Example City",
    "zipCode": "24435",
    "addrLineOne": "example street",
    "addrLineTwo": "123",
    "dateOfEmpl": "23-04-2018T03:24:00",
    "dateOfBirth": "23-04-1988T00:00:00"
  }
  ```

<h2>Getting a list of employees:</h2>
  You can fetch a list of employees by sending a GET request to /employees.
  <h3><i>example request:</i></h3>
  <b>GET /employees</b>
  
  https://examplesite.com/employees
  

<h2>Getting a single employee:</h2>
  You can fetch a single employee by sending a GET request to /employees with their ID as a parameter.
  <h3><i>example request:</i></h3>
  <b>GET /employees?id=123<b>

  
  https://examplesite.com/employees?id=123
  

<h2>Updating an employee's information:</h2>
  You can update an employee's information by sending a PUT request to /employees with their ID, as well as  
  the data to be changed in the request's body.

  <h3><i>example request:</i></h3>
  <b>PUT /employees</b>

  ``` json
  "body": {
    "id":123,
    "updateData": {
      "name": "Jack Doe",
      "emailAddr": "jackdoe@example.com"
    }
  }
  ```
<h2>Deleting an employee:</h2>
  You can delete an employee by sending a DELETE request to /employees with their ID.  
  <h3><i>example request:</i></h3>
  <b>DELETE /employees</b>

  ``` json
  "body": {
    "id": 123
  }
  ```

  Note: the employee will be soft deleted, their data will still remain in the database.
// Employee Records

/* You are to create a collection of employee's information for your company. Each employee has the following attributes:

1. Name
2. Job title
3. Salary
4. Status

First, you will create an empty array named `employees`

Next, you will create an `Employee` constructor with the first three attributes defined at the time of instantiation and the fourth will be defaulted to `"Full Time"`.

This constructor will also have a method called `printEmployeeForm` that prints the employee's information to the console.

(e.g. `"Name: Bob, Job Title: V School Instructor, Salary: $3000/hour, Status: Part time"`)

You will then:

1. Instantiate three employees
2. Override the status attribute of one of them to either "Part Time" or "Contract"
3. Call the `printEmployeeForm` method for each employee
4. Put the generated employees into the `employees` array using whichever method you prefer.*/ 

//empty array named 'employees'
const employees = [];
//employee constructor 
function Employee(name, job, salary, status, printEmployeeForm){
    this.name = name
    this.job = job
    this.salary = salary
    this.status = 'Full Time'
}
//console.log(Employee)
//variable for each employee
const alyssa = new Employee('Alyssa Workman', 'Developer', '85k', 'Part time');
const oussama = new Employee('Oussama Mhalla', 'Videographer', '70k', 'Part time');
const nova = new Employee('Nova Bjorn', 'Nurse', '100k', 'Full time');
const vania = new Employee('Vania Jenny', 'HR', '65k', 'Full time');
// console.log(alyssa)
// console.log(oussama)
alyssa.status = 'Contractor'
employees.push(alyssa, oussama, nova, vania);
//console.log(employees);

alyssa.printEmployeeForm = employees[0];
oussama.printEmployeeForm = employees[1];
nova.printEmployeeForm = employees[2];
vania.printEmployeeForm = employees[3];

Employee.prototype.employeeForm = function (){
    console.log(this.printEmployeeForm)
}

alyssa.employeeForm();
oussama.employeeForm();
nova.employeeForm();
vania.employeeForm();
let employees = []

function Employee(name, jobTitle, salary){
    this.name = name
    this.jobTitle = jobTitle
    this.salary = salary
    this.status = "Full Time"
}

const newEmployeeOne = new Employee("Fernando", "CEO", "$300/hr")
const newEmployeeTwo = new Employee("Taylor", "CFO", "$299/hr")
const newEmployeeThree = new Employee("Eric", "COO", "$298/hr")
newEmployeeThree.status = "Contract"

Employee.prototype.printEmployeeForm = function(){
    console.log("Name: " + this.name + ", " + "Job Title: " + this.jobTitle + ", " + "Salary: " + this.salary + ", " + "Status: " + this.status + ".")
}
employees.push(newEmployeeOne, newEmployeeTwo, newEmployeeThree)

// newEmployeeOne.printEmployeeForm()
// newEmployeeTwo.printEmployeeForm()
// newEmployeeThree.printEmployeeForm()
// console.log(employees)
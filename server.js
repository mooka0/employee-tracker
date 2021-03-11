const inquirer = require("inquirer");
const { viewDepartments, viewRoles, viewEmployees, addDepartment, addRole, addEmployee, updateEmployeeRole, updateEmployeeManager, deleteDepartment, deleteRole, deleteEmployee, exit } = require("./utils/queries");

promptUser = () => {
    return inquirer.prompt([
        {
            type: 'list',
            message: 'Please select an option.',
            name: 'action',
            choices: ['View Departments', 'View Roles', 'View Employees', 'Add Department', 'Add Role', 'Add Employee', 'Update Employee Role', 'Update Employee Manager', 'Delete Department', 'Delete Role', 'Delete Employee', 'Exit']
        }
    ])
        .then(choice => {

            if (choice.action === 'View Departments') {
                viewDepartments();
            }

            if (choice.action === 'View Roles') {
                viewRoles();
            }

            if (choice.action === 'View Employees') {
                viewEmployees();
            }

            if (choice.action === 'Add Department') {
                addDepartment();
            }

            if (choice.action === 'Add Role') {
                addRole();
            }

            if (choice.action === 'Add Employee') {
                addEmployee();
            }

            if (choice.action === 'Update Employee Role') {
                updateEmployeeRole();
            }

            if (choice.action === "Update Employee Manager") {
                updateEmployeeManager();
            }

            if (choice.action === "Delete Department") {
                deleteDepartment();
            }
            if (choice.action === "Delete Role") {
                deleteRole();
            }
            if (choice.action === "Delete Employee") {
                deleteEmployee();
            }
            if (choice.action === "Exit") {
                exit();
            }
        });
};``
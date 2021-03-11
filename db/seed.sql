INSERT INTO departments (department)
VALUES
    ('Sales'),
    ('Engineering'),
    ('Finance');

INSERT INTO roles (role_title, salary, department_id)
VALUES
    ('Sales Lead', 100000, 1),
    ('Salesperson', 80000, 1),
    ('Controller', 80000, 3),
    ('Lead Engineer', 150000, 2),
    ('Accountant', 100000, 3),
    ('Software Engineer', 120000, 2),
    ('Lead Accountant', 110000, 2),
    ('Sales Manager', 110000, 1);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
    ('John', 'Doe', 1, NULL),
    ('Mike', 'Chan', 2, 1),
    ('Ashley', "Rodriguez", 3, 2),
    ('Kevin', 'Tupik', 4, 2),
    ('Malia', 'Brown', 5, 2),
    ('Sarah', 'Lourd', 6, 4),
    ('Tom', 'Allen', 7, 5),
    ('Tammer', 'Galal', 8, 1);
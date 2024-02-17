const employee = [
  { id: '1', name: 'Mohamed Sayed' },
];

exports.getEmployees = async (req, res, next) => {
  res.status(200).json({ data: employee });
};

// TODO
exports.deleteEmployee = async (req, res, next) => {
  const employeeId = req.params.id;

  // Find the index of the employee with the given ID
  const index = employee.findIndex(emp => emp.id === employeeId);

  // If the employee is found, remove it from the array
  if (index !== -1) {
    employee.splice(index, 1);
    res.status(200).json({ message: 'Employee deleted successfully' });
  } else {
    res.status(404).json({ error: 'Employee not found' });
  }
};

// TODO
exports.createEmployee = async (req, res, next) => {
  const { id, name } = req.body;

  // Check if both ID and name are provided
  if (id && name) {
    // Check if the employee with the given ID already exists
    const existingEmployee = employee.find(emp => emp.id === id);

    if (existingEmployee) {
      res.status(400).json({ error: 'Employee with the same ID already exists' });
    } else {
      // Add the new employee to the array
      employee.push({ id, name });
      res.status(201).json({ message: 'Employee created successfully' });
    }
  } else {
    res.status(400).json({ error: 'Both ID and name are required' });
  }
};

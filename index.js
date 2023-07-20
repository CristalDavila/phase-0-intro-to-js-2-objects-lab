const employee = {
    name: "Sam",
    streetAddress: "11 Broadway Drive",
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newObj = {...employee, "name": "Sam", "streetAddress":"11 Broadway"}
    return newObj
};

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const newObj1 = {...employee[key]}
    delete newObj1 [key]
    return newObj1
  }

  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
    return employee
  }
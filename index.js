const employee = {
    name: "Sam",
    streetAddress: "43 F St"
}

let newEmployee

function updateEmployeeWithKeyAndValue (object, key, value) {
    newEmployee = {...object}
    newEmployee[key] = value
    return newEmployee
}

function destructivelyUpdateEmployeeWithKeyAndValue (object, key, value) {
    object[key] = value
    return object
}

function deleteFromEmployeeByKey (object, key) {
    newEmployee = {...object}
    delete newEmployee[key]
    return newEmployee
}

function destructivelyDeleteFromEmployeeByKey (object, key) {
    delete object[key]
    return object
}
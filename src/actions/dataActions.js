import { addNewEmployee_const, loadData_const, sortEmployeesByAge_const } from "../constants/dataConstants";

export function addNewEmployee_action(newData) {
    return {
        type: addNewEmployee_const,
        payload: newData
    }
}

export function sortEmployeesByAge_action() {
    return {
        type: sortEmployeesByAge_const
    }
}

export function loadData_action() {
    return {
        type: loadData_const
    }
}



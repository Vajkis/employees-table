import { addNewEmployee_const, sortEmployeesByAge_const } from "../constants/dataConstants";

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

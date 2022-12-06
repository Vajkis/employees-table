import { addNewEmployee_const, deleteAllSelectedEmployees_const, deleteEmployee_const, loadData_const, saveEdit_const } from "../constants/dataConstants";

export function loadData_action() {
    return {
        type: loadData_const
    }
}

export function addNewEmployee_action(newData) {
    return {
        type: addNewEmployee_const,
        payload: newData
    }
}

export function deleteAllSelectedEmployees_action(idList) {
    return {
        type: deleteAllSelectedEmployees_const,
        payload: idList
    }
}

export function deleteEmployee_action(id) {
    return {
        type: deleteEmployee_const,
        payload: id
    }
}

export function saveEdit_action(id, data) {
    return {
        type: saveEdit_const,
        payload: { id, data }
    }
}

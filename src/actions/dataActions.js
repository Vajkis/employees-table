import { addNewEmployee_const, checkAll_const, checkEmployee_const, deleteAllSelectedEmployees_const, deleteEmployee_const, loadData_const, sortEmployeesByAge_const } from "../constants/dataConstants";

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

export function checkAll_action(isCheck) {
    return {
        type: checkAll_const,
        payload: isCheck
    }
}

export function checkEmployee_action(id, isCheck) {
    return {
        type: checkEmployee_const,
        payload: { id, isCheck }
    }
}

export function deleteAllSelectedEmployees_action() {
    return {
        type: deleteAllSelectedEmployees_const
    }
}

export function deleteEmployee_action(id) {
    return {
        type: deleteEmployee_const,
        payload: id
    }
}

// export function (){
//     return {
//         type:
//     }
// }

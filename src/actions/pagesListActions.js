import { cancelEdit_const, checkAll_const, checkEmployee_const, createPages_const, focusEmployee_const } from "../constants/pagesListConstants";

export function createPages_action(data) {
    return {
        type: createPages_const,
        payload: data

    }
}

export function checkAll_action(page, isCheck) {
    return {
        type: checkAll_const,
        payload: { page, isCheck }
    }
}

export function checkEmployee_action(id, page, isCheck) {
    return {
        type: checkEmployee_const,
        payload: { id, page, isCheck }
    }
}

export function focusEmployee_action(id, page) {
    return {
        type: focusEmployee_const,
        payload: { id, page }
    }
}

export function cancelEdit_action(page) {
    return {
        type: cancelEdit_const,
        payload: page
    }
}

// export function (){
//     return {
//         type:
//     }
// }

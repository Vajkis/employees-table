import { checkAll_const, createPages_const } from "../constants/pagesListConstants";

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

// export function (){
//     return {
//         type:
//     }
// }

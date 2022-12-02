import { createPages_const } from "../actions/pagesListActions";

export function createPages_action(data) {
    return {
        type: createPages_const,
        payload: data

    }
}

// export function (){
//     return {
//         type:
//     }
// }

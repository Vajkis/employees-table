import { createPages_const } from "../actions/pagesListActions";

function pagesList_reducer(state, action) {
    let newState = [...state];

    switch (action.type) {
        case createPages_const:
            newState = [[]];
            const pageSize = localStorage.getItem('pageSize');

            for (const employee of action.payload) {
                if (!employee.deleted) {
                    if (newState[newState.length - 1].length < pageSize) {
                        newState[newState.length - 1] = [...newState[newState.length - 1], employee];
                    } else {
                        newState = [...newState, [employee]];
                    }
                }
            }
            break;

        default:
    }

    return newState;
}

export default pagesList_reducer;
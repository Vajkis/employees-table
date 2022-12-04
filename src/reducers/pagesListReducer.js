import { checkAll_const, createPages_const } from "../constants/pagesListConstants";

function pagesList_reducer(state, action) {
    let newState = [...state];

    switch (action.type) {
        case createPages_const:
            newState = [[]];
            const pageSize = localStorage.getItem('pageSize') || 10;

            if (action.payload) {
                for (const employee of action.payload) {
                    if (!employee.deleted) {
                        if (newState[newState.length - 1].length < pageSize) {
                            newState[newState.length - 1] = [...newState[newState.length - 1], employee];
                        } else {
                            newState = [...newState, [employee]];
                        }
                    }
                }
            }
            break;

        case checkAll_const:
            newState[action.payload.page - 1] = newState[action.payload.page - 1]?.map(e => ({ ...e, check: action.payload.isCheck }));
            break;

        default:
    }

    return newState;
}

export default pagesList_reducer;
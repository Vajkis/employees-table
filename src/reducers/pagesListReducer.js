import { cancelEdit_const, checkAll_const, checkEmployee_const, createPages_const, focusEmployee_const } from "../constants/pagesListConstants";

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
            newState[action.payload.page - 1] = newState[action.payload.page - 1]
                ?.map(e => ({ ...e, check: action.payload.isCheck }));
            break;

        case checkEmployee_const:
            newState[action.payload.page - 1] = newState[action.payload.page - 1]
                ?.map(e => e.id === action.payload.id ? { ...e, check: action.payload.isCheck } : { ...e });
            break;

        case focusEmployee_const:
            newState[action.payload.page - 1] = newState[action.payload.page - 1]
                ?.map(e => e.id === action.payload.id ? { ...e, focus: true } : { ...e, focus: false });
            break;

        case cancelEdit_const:
            newState[action.payload - 1] = newState[action.payload - 1]
                ?.map(e => ({ ...e, focus: false }));
            break;

        default:
    }

    return newState;
}

export default pagesList_reducer;
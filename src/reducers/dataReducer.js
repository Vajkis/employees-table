import { addNewEmployee_const, cancelEdit_const, checkAll_const, checkEmployee_const, deleteAllSelectedEmployees_const, deleteEmployee_const, focusEmployee_const, loadData_const, saveEdit_const } from "../constants/dataConstants";
import updateData from "../functions/updateData";

function data_reducer(state, action) {
    let newState = state ? [...state] : null;

    switch (action.type) {
        case loadData_const:
            newState = JSON.parse(localStorage.getItem('data')) || [];
            break;

        case addNewEmployee_const:
            newState = newState?.map(e => ({ ...e, check: false, focus: false }));
            newState = [...newState, action.payload];
            updateData(newState);
            break;

        case checkAll_const:
            if (action.payload.idList.length) {
                newState = newState?.map(e => action.payload.idList.includes(e.id) ? { ...e, check: action.payload.isCheck } : { ...e });
            } else {
                newState = newState?.map(e => ({ ...e, check: false }));
            }
            break;

        case checkEmployee_const:
            newState = newState?.map(e => e.id === action.payload.id ? { ...e, check: action.payload.isCheck } : { ...e });
            break;

        case deleteAllSelectedEmployees_const:
            newState = newState?.map(e => e.check ? { ...e, deleted: true, check: false, focus: false } : { ...e, focus: false });
            updateData(newState);
            break;

        case deleteEmployee_const:
            newState = newState?.map(e => ({ ...e, check: false, focus: false }));
            newState = newState?.map(e => e.id === action.payload ? { ...e, deleted: true } : { ...e });
            updateData(newState);
            break;

        case focusEmployee_const:
            newState = newState?.map(e => e.id === action.payload ? { ...e, focus: true } : { ...e, focus: false });
            break;

        case cancelEdit_const:
            newState = newState?.map(e => ({ ...e, focus: false }));
            break;

        case saveEdit_const:
            newState = newState?.map(e => e.id === action.payload.id ? { ...e, ...action.payload.data, focus: false } : { ...e });
            updateData(newState);
            break;

        default:
    }

    return newState;
}

export default data_reducer;
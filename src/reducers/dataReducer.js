import { addNewEmployee_const, deleteAllSelectedEmployees_const, deleteEmployee_const, loadData_const, saveEdit_const, sortEmployees_const } from "../constants/dataConstants";
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

        case deleteAllSelectedEmployees_const:
            newState = newState?.map(e => action.payload?.includes(e.id) ? { ...e, deleted: true, check: false, focus: false } : { ...e, focus: false });
            updateData(newState);
            break;

        case deleteEmployee_const:
            newState = newState?.map(e => ({ ...e, check: false, focus: false }));
            newState = newState?.map(e => e.id === action.payload ? { ...e, deleted: true } : { ...e });
            updateData(newState);
            break;

        case saveEdit_const:
            newState = newState?.map(e => e.id === action.payload.id ? { ...e, ...action.payload.data, focus: false } : { ...e });
            updateData(newState);
            break;

        case sortEmployees_const:

            switch (action.payload.sortBy) {
                case 'Name':
                    newState = [...newState]?.sort((a, b) => a.name.localeCompare(b.name) * action.payload.order);
                    break;

                case 'Age':
                    newState = [...newState]?.sort((a, b) => a.name.localeCompare(b.name) * action.payload.order);

                    if (action.payload.order > 0) {
                        newState = [...newState]?.sort((a, b) => a.age - b.age);
                    } else {
                        newState = [...newState]?.sort((a, b) => b.age - a.age);
                    }
                    break;

                case 'City':
                    newState = [...newState]?.sort((a, b) => b.name.localeCompare(a.name) * action.payload.order * -1);
                    newState = [...newState]?.sort((a, b) => b.city.localeCompare(a.city) * action.payload.order * -1);
                    break;

                default:
                    newState && (newState = [...newState]?.sort((a, b) => a.id - b.id));
                    break;
            }
            break;

        default:
    }

    return newState;
}

export default data_reducer;
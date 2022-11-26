import { addNewEmployee_const, checkAll_const, checkEmployee_const, loadData_const, sortEmployeesByAge_const } from "../constants/dataConstants";

function data_reducer(state, action) {
    let newState = state ? [...state] : null;

    switch (action.type) {
        case addNewEmployee_const:
            newState = newState?.map(e => ({ ...e, check: false }));
            newState = [...newState, action.payload];
            localStorage.setItem('data', JSON.stringify(newState));
            break;

        case sortEmployeesByAge_const:
            newState.sort((a, b) => a.age - b.age);
            break;

        case loadData_const:
            newState = JSON.parse(localStorage.getItem('data')) || [];
            break;

        case checkAll_const:
            newState = newState?.map(e => ({ ...e, check: action.payload }));
            break;

        case checkEmployee_const:
            newState = newState?.map(e => e.id === action.payload.id ? { ...e, check: action.payload.isCheck } : { ...e });
            break;

        default:
    }

    return newState;
}

export default data_reducer;
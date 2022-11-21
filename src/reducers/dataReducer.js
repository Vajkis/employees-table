import { addNewEmployee_const, sortEmployeesByAge_const } from "../constants/dataConstants";

function data_reducer(state, action) {
    let newState = [...state];

    switch (action.type) {
        case addNewEmployee_const:
            newState = [...newState, action.payload];
            break;

        case sortEmployeesByAge_const:
            newState.sort((a, b) => a.age - b.age)
            break;
        default:
    }

    return newState;
}

export default data_reducer;
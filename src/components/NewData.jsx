import { useContext, useRef } from "react";
import { addNewEmployee_action } from "../actions/dataActions";
import getId from "../functions/getId";
import DataContext from "./DataContext";

function NewData() {

    const { dispachData } = useContext(DataContext);

    const nameRef = useRef();
    const ageRef = useRef();
    const selectRef = useRef();

    const addNewEmployee = () => {
        let name = nameRef.current.value;
        let age = ageRef.current.value;
        let city = selectRef.current.value;

        if (name && age && city) {
            dispachData(addNewEmployee_action({
                id: getId(),
                name: name[0].toUpperCase() + name.slice(1).toLowerCase(),  // fix
                age,
                city,
                deleted: false,
                focus: false,
                check: false
            }));

            nameRef.current.value = '';
            ageRef.current.value = '';
            selectRef.current.value = '';
        }
    }

    return (
        <div className='new-data'>
            <input ref={nameRef} type='text' placeholder='Name' onKeyUp={e => e.key === 'Enter' && addNewEmployee()} />
            <input ref={ageRef} type='number' placeholder='Age' onKeyUp={e => e.key === 'Enter' && addNewEmployee()} />
            <select ref={selectRef}>
                <option value=''>Choose city</option>
                <option value='Vilnius'>Vilnius</option>
                <option value='Kaunas'>Kaunas</option>
                <option value='Klaipeda'>Klaipeda</option>
            </select>
            <button onClick={addNewEmployee}>Add employee</button>
        </div>
    );
}

export default NewData;

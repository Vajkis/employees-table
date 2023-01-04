import { useContext, useRef } from "react";
import { addNewEmployee_action, sortEmployees_action } from "../actions/dataActions";
import getId from "../functions/getId";
import inputsValidation from "../functions/inputsValidations";
import DataContext from "./DataContext";

function NewData() {

    const { dispachData, sortOrder, setNotifications } = useContext(DataContext);

    const nameRef = useRef();
    const ageRef = useRef();
    const selectRef = useRef();


    const addNewEmployee = () => {
        setNotifications([]);

        const name = nameRef.current.value;
        const age = ageRef.current.value;
        const city = selectRef.current.value;

        const nameValidation = inputsValidation(name, 'name');
        const ageValidation = inputsValidation(age, 'age');

        const isName = !nameValidation.error;
        const isAge = !ageValidation.error;

        if (isName && isAge && city) {

            dispachData(addNewEmployee_action({
                id: getId(),
                name: (name[0].toUpperCase() + name.slice(1).toLowerCase()).trim(),
                age,
                city,
                deleted: false,
                focus: false,
                check: false
            }));

            const [lastSort, lastOrder] = sortOrder;
            dispachData(sortEmployees_action(lastSort, lastOrder));

            nameRef.current.value = '';
            ageRef.current.value = '';
            selectRef.current.value = '';
        } else {
            if (!isName) {
                setNotifications(n => [...n, nameValidation.notification]);
            }

            if (!isAge) {
                setNotifications(n => [...n, ageValidation.notification]);
            }

            if (!city) {
                setNotifications(n => [...n, 'city not selected']);
            }
        }
    }

    return (
        <>
            <div className='new-data'>

                <input ref={nameRef} type='text' placeholder='Name' onKeyUp={e => e.key === 'Enter' && addNewEmployee()} />
                <input ref={ageRef} type='number' placeholder='Age' onKeyUp={e => e.key === 'Enter' && addNewEmployee()} />
                <select ref={selectRef}>
                    <option value=''>Choose city</option>
                    <option value='Vilnius'>Vilnius</option>
                    <option value='Kaunas'>Kaunas</option>
                    <option value='Klaipėda'>Klaipėda</option>
                </select>
                <button onClick={addNewEmployee}>Add employee</button>
            </div>
        </>
    );
}

export default NewData;

import { useRef } from "react";

function NewData() {

    const nameRef = useRef();
    const ageRef = useRef();
    const selectRef = useRef();

    const add = () => {
        nameRef.current.value = '';
        ageRef.current.value = '';
        selectRef.current.value = '';
    }

    return (
        <div>
            <input ref={nameRef} placeholder='Name' />
            <input ref={ageRef} type='number' placeholder='Age' />
            <select ref={selectRef}>
                <option value=''>Choose city</option>
                <option value='Vilnius'>Vilnius</option>
                <option value='Kaunas'>Kaunas</option>
                <option value='Klaipeda'>Klaipeda</option>
            </select>
            <button onClick={add}>Add employee</button>
        </div>
    );
}

export default NewData;

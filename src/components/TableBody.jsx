import { useContext, useEffect, useState } from "react";
import { deleteEmployee_action, saveEdit_action } from "../actions/dataActions";
import { cancelEdit_action, checkAll_action, checkEmployee_action, createPages_action, focusEmployee_action } from "../actions/pagesListActions";
import inputsValidation from "../functions/inputsValidations";
import DataContext from "./DataContext";

function TableBody() {

    const { data, dispachData, setIsCheck, pagesList, dispachPagesList, page, setNotifications } = useContext(DataContext);

    useEffect(() => {
        dispachPagesList(checkAll_action(page, false));
    }, [page, dispachPagesList]);

    useEffect(() => {
        dispachPagesList(createPages_action(data));
    }, [data, dispachPagesList]);

    const check = (id, e) => {
        const c = e.target.checked;
        dispachPagesList(checkEmployee_action(id, page, c));

        if (!c) {
            setIsCheck(c);
        }
    }

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [city, setCity] = useState('');

    const edit = id => {
        const focusedEmployee = pagesList[page - 1].filter(e => e.id === id)[0];

        console.log(focusedEmployee);

        setName(focusedEmployee.name);
        setAge(focusedEmployee.age);
        setCity(focusedEmployee.city);

        setNotifications([]);

        dispachPagesList(focusEmployee_action(id, page));
    }

    const save = id => {
        setNotifications([]);

        const nameValidation = inputsValidation(name, 'name');
        const ageValidation = inputsValidation(age, 'age');

        const isName = !nameValidation.error;
        const isAge = !ageValidation.error;

        if (isName && isAge && city) {
            dispachData(saveEdit_action(id, { name, age, city }));
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

    const focusEmployee = e => {

        return (
            <tr key={e.id}>
                <td>
                    <label className="checkbox">
                        <input type='checkbox' onChange={event => check(e.id, event)} checked={e.check}></input>
                        <div className="checkmark" />
                    </label>
                </td>
                <td><input type='text' value={name} onChange={event => setName(event.target.value)} onKeyUp={event => event.key === 'Enter' && dispachData(saveEdit_action(e.id, { name, age, city }))} /></td>
                <td><input type='number' value={age} onChange={event => setAge(event.target.value)} onKeyUp={event => event.key === 'Enter' && dispachData(saveEdit_action(e.id, { name, age, city }))} /></td>
                <td>
                    <select value={city} onChange={event => setCity(event.target.value)}>
                        <option value='Vilnius'>Vilnius</option>
                        <option value='Kaunas'>Kaunas</option>
                        <option value='Klaipėda'>Klaipėda</option>
                    </select>
                </td>
                <td>
                    <button onClick={() => dispachPagesList(cancelEdit_action(page))}>Cancel</button>
                    <button onClick={() => save(e.id)}>Save</button>
                </td>
            </tr>
        );
    }

    const blurEmployee = e => {
        return (
            <tr key={e.id}>
                <td>
                    <label className="checkbox">
                        <input type='checkbox' onChange={event => check(e.id, event)} checked={e.check}></input>
                        <div className="checkmark" />
                    </label>
                </td>
                <td>{e.name}</td>
                <td>{e.age}</td>
                <td>{e.city}</td>
                <td>
                    <button onClick={() => edit(e.id)}>Edit</button>
                    <button onClick={() => dispachData(deleteEmployee_action(e.id))}>Delete</button>
                </td>
            </tr>
        );
    }

    return (
        <tbody className="tbody">
            {pagesList[page - 1]?.map(e => e.focus ? focusEmployee(e) : blurEmployee(e))}
        </tbody>
    );
}

export default TableBody;
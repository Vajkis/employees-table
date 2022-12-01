import { useContext, useEffect, useState } from "react";
import { cancelEdit_action, checkEmployee_action, deleteEmployee_action, focusEmployee_action, saveEdit_action } from "../actions/dataActions";
import DataContext from "./DataContext";

function TableBody() {

    const { data, dispachData, setIsCheck, pagesList } = useContext(DataContext);

    const check = (id, e) => {
        const c = e.target.checked;
        dispachData(checkEmployee_action(id, c));

        if (!c) {
            setIsCheck(c);
        }
    }

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [city, setCity] = useState('');

    useEffect(() => {
        if (data?.some(e => e.focus)) {
            const focusedEmployee = [...data].filter(e => e.focus)[0];

            setName(focusedEmployee.name);
            setAge(focusedEmployee.age);
            setCity(focusedEmployee.city);
        }
    }, [data]);

    function focusEmployee(e) {
        return (
            <tr key={e.id}>
                <td>
                    <label className="checkbox">
                        <input type='checkbox' onChange={event => check(e.id, event)} checked={e.check}></input>
                        <div className="checkmark" />
                    </label>
                </td>
                <td><input type='text' value={name} onChange={event => setName(event.target.value)} /></td>
                <td><input type='number' value={age} onChange={event => setAge(event.target.value)} /></td>
                <td>
                    <select value={city} onChange={event => setCity(event.target.value)}>
                        <option value='Vilnius'>Vilnius</option>
                        <option value='Kaunas'>Kaunas</option>
                        <option value='Klaipeda'>Klaipeda</option>
                    </select>
                </td>
                <td>
                    <button onClick={() => dispachData(cancelEdit_action())}>Cancel</button>
                    <button onClick={() => dispachData(saveEdit_action(e.id, { name, age, city }))}>Save</button>
                </td>
            </tr>
        );
    }

    function blurEmployee(e) {
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
                    <button onClick={() => dispachData(focusEmployee_action(e.id))}>Edit</button>
                    <button onClick={() => dispachData(deleteEmployee_action(e.id))}>Delete</button>
                </td>
            </tr>
        );
    }

    let notDeletedData = [];

    if (data) {
        notDeletedData = [...data].filter(e => !e.deleted);
    }

    const currentPageSize = localStorage.getItem('pageSize') || 10;

    while (notDeletedData.length > 0) {
        if (pagesList[pagesList.length - 1].length < currentPageSize) {
            pagesList[pagesList.length - 1].push(notDeletedData.shift());
        } else {
            pagesList.push([notDeletedData.shift()]);
        }
    }

    return (
        <tbody className="tbody">
            {pagesList[0].map(e => e.focus ? focusEmployee(e) : blurEmployee(e))}
        </tbody>
    );
}

export default TableBody;
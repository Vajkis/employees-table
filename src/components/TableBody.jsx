import { useContext, useEffect, useState } from "react";
import { deleteEmployee_action, saveEdit_action } from "../actions/dataActions";
import { cancelEdit_action, checkAll_action, checkEmployee_action, createPages_action, focusEmployee_action } from "../actions/pagesListActions";
import DataContext from "./DataContext";

function TableBody() {

    const { data, dispachData, setIsCheck, pagesList, dispachPagesList, page } = useContext(DataContext);

    useEffect(() => {
        dispachPagesList(checkAll_action(page, false));
        dispachPagesList(createPages_action(data));
    }, [page, dispachPagesList]);

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

    useEffect(() => {
        if (pagesList[page - 1]?.some(e => e.focus)) {
            const focusedEmployee = [...pagesList[page - 1]].filter(e => e.focus)[0];

            setName(focusedEmployee.name);
            setAge(focusedEmployee.age);
            setCity(focusedEmployee.city);
        }
    }, [page, pagesList]);

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
                        <option value='Klaipeda'>Klaipeda</option>
                    </select>
                </td>
                <td>
                    <button onClick={() => dispachPagesList(cancelEdit_action(page))}>Cancel</button>
                    <button onClick={() => dispachData(saveEdit_action(e.id, { name, age, city }))}>Save</button>
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
                    <button onClick={() => dispachPagesList(focusEmployee_action(e.id, page))}>Edit</button>
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
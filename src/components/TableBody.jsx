import { useContext } from "react";
import { checkEmployee_action, deleteEmployee_action } from "../actions/dataActions";
import DataContext from "./DataContext";

function TableBody() {

    const { data, dispachData, setIsCheck } = useContext(DataContext);

    const check = (id, e) => {
        const c = e.target.checked;
        dispachData(checkEmployee_action(id, c));

        if (!c) {
            setIsCheck(c);
        }
    }

    return (
        <tbody>
            {data?.map(e => {
                return !e.deleted && (
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
                        <td><button onClick={() => dispachData(deleteEmployee_action(e.id))}>Delete</button></td>
                    </tr>
                )
            })}
        </tbody>
    );
}

export default TableBody;
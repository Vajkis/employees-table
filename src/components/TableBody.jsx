import { useContext } from "react";
import { checkEmployee_action } from "../actions/dataActions";
import DataContext from "./DataContext";

function TableBody() {

    const { data, dispachData } = useContext(DataContext);

    const check = (id, e) => {
        const c = e.target.checked;
        dispachData(checkEmployee_action(id, c));


    }


    return (
        <tbody>
            {data?.map(e => {
                return (
                    <tr key={e.id}>
                        <td><input type='checkbox' onChange={event => check(e.id, event)} checked={e.check}></input></td>
                        <td>{e.name}</td>
                        <td>{e.age}</td>
                        <td>{e.city}</td>
                    </tr>
                )
            })}
        </tbody>
    );
}

export default TableBody;
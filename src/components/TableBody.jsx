import { useContext } from "react";
import { checkEmployee_action } from "../actions/dataActions";
import DataContext from "./DataContext";

function TableBody() {

    const { data, dispachData } = useContext(DataContext);

    return (
        <tbody>
            {data?.map(e => {
                return (
                    <tr key={e.id}>
                        <td><input type='checkbox' onChange={event => dispachData(checkEmployee_action(e.id, event.target.checked))} checked={e.check}></input></td>
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
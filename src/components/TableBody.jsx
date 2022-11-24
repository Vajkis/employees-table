import { useContext } from "react";
import DataContext from "./DataContext";

function TableBody() {

    const { data } = useContext(DataContext);

    return (
        <tbody>
            {data?.map(e => {
                return (
                    <tr key={e.id}>
                        <td><input type='checkbox' onChange={e => { }} checked={e.check}></input></td>
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
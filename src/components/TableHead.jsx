import { useContext, useEffect, useState } from "react";
import { checkAll_action } from "../actions/dataActions";
import DataContext from "./DataContext";

function TableHead() {

    const { dispachData, data } = useContext(DataContext);

    const [isCheck, setIsCheck] = useState(false);

    const check = e => {
        const c = e.target.checked;
        setIsCheck(c);
    }

    useEffect(() => {

    }, [data]);

    return (
        <thead>
            <tr>
                <th><input type='checkbox' onChange={e => { check(e); dispachData(checkAll_action(e.target.checked)) }} checked={isCheck}></input></th>
                <th>Name</th>
                <th>Age</th>
                <th>City</th>
            </tr>
        </thead>
    );
}

export default TableHead;

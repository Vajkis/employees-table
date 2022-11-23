import { useContext, useEffect, useState } from "react";
import { checkAll_action } from "../actions/dataActions";
import DataContext from "./DataContext";

function TableHead() {

    const [isCheck, setIsCheck] = useState(false);

    const check = () => {
        setIsCheck(c => !c);
    }

    const { dispachData } = useContext(DataContext);

    useEffect(() => {
        dispachData(checkAll_action(isCheck));
    }, [isCheck, dispachData]);

    return (
        <thead>
            <tr>
                <th><input type='checkbox' onChange={check} value={isCheck}></input></th>
                <th>Name</th>
                <th>Age</th>
                <th>City</th>
            </tr>
        </thead>
    );
}

export default TableHead;

import { useContext, useEffect, useState } from "react";
import { checkAll_action } from "../actions/dataActions";
import DataContext from "./DataContext";

function TableHead() {

    const { dispachData, data } = useContext(DataContext);

    const [isCheck, setIsCheck] = useState(false);

    useEffect(() => {
        if (data) {
            const checkData = [...data].filter(e => !e.deleted);
            if (checkData.length && !checkData.some(e => e.check === false)) {
                setIsCheck(true);
            }
        }
    }, [data]);

    const check = e => {
        const v = e.target.checked;
        setIsCheck(!v);
    }

    return (
        <thead>
            <tr>
                <th><input type='checkbox' onChange={e => { check(e); dispachData(checkAll_action(e.target.checked)); }} value={isCheck}></input></th>
                <th>Name</th>
                <th>Age</th>
                <th>City</th>
            </tr>
        </thead>
    );
}

export default TableHead;

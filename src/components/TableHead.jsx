import { useContext, useEffect } from "react";
import { checkAll_action, deleteAllSelectedEmployees_action } from "../actions/dataActions";
import DataContext from "./DataContext";

function TableHead() {

    const { dispachData, isCheck, setIsCheck, pagesList, page } = useContext(DataContext);

    const check = e => {
        setIsCheck(e.target.checked);
    }

    const currentPage = pagesList[page - 1];

    useEffect(() => {
        if (currentPage.length) {
            if (!currentPage.some(e => !e.check)) {
                setIsCheck(true);
            } else {
                setIsCheck(false);
            }
        } else {
            setIsCheck(false);
        }
    }, [currentPage, setIsCheck])

    return (
        <thead>
            <tr>
                <th>
                    <label className="checkbox">
                        <input type='checkbox' onChange={e => { check(e); dispachData(checkAll_action(pagesList[page - 1].map(e => e.id), e.target.checked)) }} checked={isCheck} />
                        <div className="checkmark" />
                    </label>
                </th>
                <th>Name</th>
                <th>Age</th>
                <th>City</th>
                <th><button onClick={() => dispachData(deleteAllSelectedEmployees_action())}>Delete all selected</button></th>
            </tr>
        </thead>
    );
}

export default TableHead;

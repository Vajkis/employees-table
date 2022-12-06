import { useContext, useEffect, useState } from "react";
import { checkAll_action } from "../actions/pagesListActions"
import { deleteAllSelectedEmployees_action } from "../actions/dataActions";
import DataContext from "./DataContext";

function TableHead() {

    const { dispachData, isCheck, setIsCheck, pagesList, page, setPage, dispachPagesList } = useContext(DataContext);

    const check = e => {
        setIsCheck(e.target.checked);
    }

    const deleteAllSelected = () => {
        let idList = [];

        for (const employee of pagesList[page - 1]) {
            employee.check && (idList = [...idList, employee.id]);
        }

        idList.length && dispachData(deleteAllSelectedEmployees_action(idList));
    }

    const [disabled, setDisabled] = useState(false);

    useEffect(() => {
        if (pagesList[page - 1]?.some(e => !e.check)) {
            setIsCheck(false);
        } else if (pagesList[page - 1]?.every(e => e.check)) {
            setIsCheck(true);
        }

        if (pagesList[page - 1]?.length) {
            setDisabled(false);
        } else {
            page > 1 && setPage(p => p - 1);
            setIsCheck(false);
            setDisabled(true);
        }

    }, [isCheck, page, pagesList, setIsCheck, setPage]);

    return (
        <thead>
            <tr>
                <th>
                    <label className="checkbox">
                        <input type='checkbox' onChange={e => { check(e); dispachPagesList(checkAll_action(page, e.target.checked)); }} checked={isCheck} disabled={disabled} />
                        <div className="checkmark" />
                    </label>
                </th>
                <th>Name</th>
                <th>Age</th>
                <th>City</th>
                <th><button onClick={deleteAllSelected}>Delete all selected</button></th>
            </tr>
        </thead>
    );
}

export default TableHead;

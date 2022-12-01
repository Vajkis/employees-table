import { useContext, useEffect, useState } from "react";
import { checkAll_action, deleteAllSelectedEmployees_action } from "../actions/dataActions";
import DataContext from "./DataContext";

function TableHead() {

    const { dispachData, isCheck, setIsCheck, pagesList, page, setPage } = useContext(DataContext);

    const check = e => {
        setIsCheck(e.target.checked);
    }

    const [disabled, setDisabled] = useState(false);

    useEffect(() => {
        const currentPage = pagesList[page - 1];

        if (currentPage?.length) {
            if (!currentPage.some(e => !e.check)) {
                setIsCheck(true);
            } else {
                setIsCheck(false);
            }
            setDisabled(false);
        } else {
            setIsCheck(false);
            page > 1 && setPage(p => p - 1);
            setDisabled(true);
        }
    }, [pagesList, page, setIsCheck, setPage, setDisabled]);

    return (
        <thead>
            <tr>
                <th>
                    <label className="checkbox">
                        <input type='checkbox' onChange={e => { check(e); dispachData(checkAll_action(pagesList[page - 1].map(e => e.id), e.target.checked)); }} checked={isCheck} disabled={disabled} />
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

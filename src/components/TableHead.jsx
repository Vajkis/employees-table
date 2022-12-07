import { useContext, useEffect, useState } from "react";
import { checkAll_action } from "../actions/pagesListActions"
import { deleteAllSelectedEmployees_action, sortEmployees_action } from "../actions/dataActions";
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

    const [sortOrder, setSortOrder] = useState(['', 0]);

    const sort = sortBy => {
        const [lastSort, lastOrder] = sortOrder

        if (lastSort === sortBy && lastOrder === -1) {
            dispachData(sortEmployees_action(''));
            setSortOrder(['', 0]);

        } else if (!lastOrder) {
            dispachData(sortEmployees_action(sortBy, 1));
            setSortOrder([sortBy, 1]);

        } else if (lastOrder === 1) {
            dispachData(sortEmployees_action(sortBy, lastSort === sortBy ? -1 : 1));
            setSortOrder([sortBy, lastSort === sortBy ? -1 : 1]);
        }
    }

    return (
        <thead>
            <tr>
                <th>
                    <label className="checkbox">
                        <input type='checkbox' onChange={e => { check(e); dispachPagesList(checkAll_action(page, e.target.checked)); }} checked={isCheck} disabled={disabled} />
                        <div className="checkmark" />
                    </label>
                </th>
                <th onClick={() => sort('Name')}>Name</th>
                <th onClick={() => sort('Age')}>Age</th>
                <th onClick={() => sort('City')}>City</th>
                <th><button onClick={deleteAllSelected}>Delete all selected</button></th>
            </tr>
        </thead>
    );
}

export default TableHead;

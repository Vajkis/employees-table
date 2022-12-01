import { useContext, useEffect, useState } from "react";
import { addNewEmployee_action, loadData_action } from "../actions/dataActions";
import getRandomEmployee from "../functions/getRandomEmployee";
import savePageSize from "../functions/savePageSize";
import DataContext from "./DataContext";

function TablePagesList() {

    const { dispachData, pagesList, page, setPage } = useContext(DataContext);
    const [pageSize, setPageSize] = useState('');

    useEffect(() => {
        savePageSize(pageSize);
        dispachData(loadData_action());
    }, [pageSize, dispachData]);

    return (
        <div className='page-list'>
            <select value={pageSize} onChange={e => setPageSize(e.target.value)}>
                <option value=''>Page size</option>
                <option value='10'>10</option>
                <option value='25'>25</option>
                <option value='50'>50</option>
                <option value='100'>100</option>
            </select>

            <nav>
                <button onClick={() => page > 1 && setPage(p => p - 1)}>{'<'}</button>
                <ul>
                    {page > 2 ? <li onClick={() => setPage(1)}>1</li> : null}
                    <li className='current-page'>1</li>
                    <li>2</li>
                    <li className='space'>...</li>
                    <li>4</li>
                    {page < pagesList.length - 1 ? <li onClick={() => setPage(pagesList.length)}>{pagesList.length}</li> : null}
                </ul>
                <button onClick={() => page < pagesList.length && setPage(p => p + 1)}>{'>'}</button>
            </nav>

            <button onClick={() => dispachData(addNewEmployee_action(getRandomEmployee()))}>Test tool</button>
        </div>
    );
}

export default TablePagesList;
import { useContext, useEffect, useState } from "react";
import { loadData_action } from "../actions/dataActions";
import savePageSize from "../functions/savePageSize";
import DataContext from "./DataContext";

function TablePagesList() {

    const { dispachData } = useContext(DataContext);
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
                <button>{'<'}</button>
                <ul>
                    <li className='current-page'>1</li>
                    <li>2</li>
                    <li className='space'>...</li>
                    <li>4</li>
                </ul>
                <button>{'>'}</button>
            </nav>
        </div>
    );
}

export default TablePagesList;
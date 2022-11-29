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
        <div style={{ position: 'relative', marginTop: '10px' }}>
            <select style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)' }} value={pageSize} onChange={e => setPageSize(e.target.value)}>
                <option value=''>Page size</option>
                <option value='10'>10</option>
                <option value='25'>25</option>
                <option value='50'>50</option>
                <option value='100'>100</option>
            </select>

            <nav style={{ display: 'flex', gap: '10px', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                <button style={{ aspectRatio: '1 / 1' }}>{'<'}</button>
                <ul style={{ display: 'flex', listStyleType: 'none', gap: '10px', padding: 0 }}>
                    <li>1</li>
                    <li>2</li>
                    <li>...</li>
                    <li>4</li>
                </ul>
                <button style={{ aspectRatio: '1 / 1' }}>{'>'}</button>
            </nav>
        </div>
    );
}

export default TablePagesList;
import { useContext, useEffect, useState } from "react";
import { addNewEmployee_action, checkAll_action, loadData_action } from "../actions/dataActions";
import getRandomEmployee from "../functions/getRandomEmployee";
import savePageSize from "../functions/savePageSize";
import DataContext from "./DataContext";

function TablePagesList() {

    const { dispachData, /*pagesList,*/  pagesList, page, setPage } = useContext(DataContext);
    const [pageSize, setPageSize] = useState('');

    useEffect(() => {
        savePageSize(pageSize);
        dispachData(loadData_action());
    }, [pageSize, dispachData]);

    useEffect(() => {
        dispachData(checkAll_action([], false));
    }, [page, dispachData]);

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
                    {/*                         
                        1         page === 2
                        1 2       page === 3
                        1 ... 3   page > 3
                    */}

                    {page === 2 && <li onClick={() => setPage(1)}>1</li>}

                    {page === 3 && <>
                        <li onClick={() => setPage(1)}>1</li>
                        <li onClick={() => setPage(2)}>2</li>
                    </>}

                    {page > 3 && <>
                        <li onClick={() => setPage(1)}>1</li>
                        <li className='space'>...</li>
                        <li onClick={() => setPage(p => p - 1)}>{page - 1}</li>
                    </>}

                    <li className='current-page'>{page}</li>

                    {page < pagesList.length - 2 && <>
                        <li onClick={() => setPage(p => p + 1)}>{page + 1}</li>
                        <li className='space'>...</li>
                        <li onClick={() => setPage(pagesList.length)}>{pagesList.length}</li>
                    </>}

                    {page === pagesList.length - 2 && <>
                        <li onClick={() => setPage(p => p + 1)}>{page + 1}</li>
                        <li onClick={() => setPage(p => p + 2)}>{page + 2}</li>
                    </>}

                    {page === pagesList.length - 1 && <li onClick={() => setPage(p => p + 1)}>{page + 1}</li>}

                    {/* 
                        8 ...   page < pagesList.length - 2
                        9 10    page === pagesList.length -2
                        10      page === pagesList.length -1

                        10      page < pagesList.length - 2
                    */}
                </ul>

                <button onClick={() => page < pagesList.length && setPage(p => p + 1)}>{'>'}</button>
            </nav>

            <button onClick={() => dispachData(addNewEmployee_action(getRandomEmployee()))}>Test tool</button>
        </div>
    );
}

export default TablePagesList;
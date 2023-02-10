import { useContext, useState } from "react";
import { addNewEmployee_action, sortEmployees_action, } from "../actions/dataActions";
import { createPages_action } from "../actions/pagesListActions";
import getRandomEmployee from "../functions/getRandomEmployee";
import DataContext from "./DataContext";

function TablePagesList() {

    const { dispachData, pagesList, page, setPage, sortOrder, dispachPagesList, data } = useContext(DataContext);
    const [pageSize, setPageSize] = useState('')

    const handlePageSize = e => {
        const newPageSize = e.target.value;
        setPageSize(newPageSize);

        localStorage.setItem('pageSize', newPageSize);
        dispachPagesList(createPages_action(data));
    }

    const testTool = () => {
        dispachData(addNewEmployee_action(getRandomEmployee()))

        const [lastSort, lastOrder] = sortOrder;
        dispachData(sortEmployees_action(lastSort, lastOrder));
    }

    return (
        <div className='page-list'>
            <select value={pageSize} onChange={handlePageSize}>
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

            <button onClick={testTool}>Test tool</button>
        </div>
    );
}

export default TablePagesList;
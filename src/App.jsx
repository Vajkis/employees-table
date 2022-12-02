import './App.scss';
import { useEffect, useReducer, useState } from 'react';
import { loadData_action } from './actions/dataActions';
import DataContext from './components/DataContext';
import NewData from './components/NewData';
import Table from './components/Table';
import TablePagesList from './components/TablePagesList';
import data_reducer from './reducers/dataReducer';
import pagesList_reducer from './reducers/pagesListReducer';

function App() {

  const [data, dispachData] = useReducer(data_reducer, null);
  const [pagesList, dispachPagesList] = useReducer(pagesList_reducer, [[]])
  const [page, setPage] = useState(1);
  const [isCheck, setIsCheck] = useState(false);

  useEffect(() => {
    dispachData(loadData_action());
  }, []);

  return (
    <DataContext.Provider value={{
      data,
      dispachData,
      isCheck,
      setIsCheck,
      pagesList,
      dispachPagesList,
      page,
      setPage
    }}>
      <NewData />
      <Table />
      <TablePagesList />
    </DataContext.Provider>
  );
}

export default App;

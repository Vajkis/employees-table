import './App.scss';
import { useEffect, useReducer, useState } from 'react';
import { loadData_action } from './actions/dataActions';
import DataContext from './components/DataContext';
import NewData from './components/NewData';
import Table from './components/Table';
import TablePagesList from './components/TablePagesList';
import data_reducer from './reducers/dataReducer';

function App() {

  const [data, dispachData] = useReducer(data_reducer, null);
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
    }}>
      <NewData />
      <Table />
      <TablePagesList />
    </DataContext.Provider>
  );
}

export default App;

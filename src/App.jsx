import { useEffect, useReducer } from 'react';
import { loadData_action } from './actions/dataActions';
import './App.scss';
import DataContext from './components/DataContext';
import NewData from './components/NewData';
import Table from './components/Table';
import data_reducer from './reducers/dataReducer';

function App() {

  const [data, dispachData] = useReducer(data_reducer, null);

  useEffect(() => {
    dispachData(loadData_action());
  }, []);

  return (
    <DataContext.Provider value={{
      data,
      dispachData
    }}>
      <NewData />
      <Table />
    </DataContext.Provider>
  );
}

export default App;

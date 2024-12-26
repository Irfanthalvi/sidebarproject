/**
    * @description      : 
    * @author           : computer
    * @group            : 
    * @created          : 01/12/2024 - 13:26:48
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 01/12/2024
    * - Author          : computer
    * - Modification    : 
**/
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import New from '././Components/New';
import List from './Components/List';
import Draft from './Components/Draft';
import Layout from './Components/Layout';
import NewCollectiveLeave from './Components/NewCollectiveLeave';

function App() {
  return (
    <div >
      <Router>
        <Routes>
          <Route path="/" element={<Layout  />}>
          <Route path="/new" element={<New />} />
          <Route path="/new collective leave" element={<NewCollectiveLeave />} />
          <Route path="/List" element={<List />} />
          <Route path="/Draft" element={<Draft />} />
          </Route>
        </Routes>
      </Router> 



    </div>
  );
}

export default App;

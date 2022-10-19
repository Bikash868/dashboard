import './App.css';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import NavBar from './Components/NavBar';
import Landings from './Components/Landings';
import Docs from './Components/Docs';
import Pages from './Components/Pages';
import UIKit from './Components/UIKit';
import Account from './Components/Account';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path='/landings' element={<Landings/>} />
        <Route exact path='/' element={<Pages/>} />
        <Route exact path='/account' element={<Account/>} />
        <Route excat path='/uikit' element={<UIKit/>} />
        <Route exact path='/docs' element={<Docs/>} />
      </Routes>
    </Router>
  );
}

export default App;


import './App.css';

import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './components/login';
import SignUP from './components/signUP';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePortal from './components/homePortal';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path='/signup' element={<SignUP/>}/>
        <Route path='/home/*' element={<HomePortal/>}/>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;

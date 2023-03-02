import { Route, Routes } from 'react-router-dom';
import {Driverpage} from './pages/Driverpage';
import {Landingpage} from './pages/Landingpage';
import {Viewdriverspage} from './pages/Viewdriverspage'
import {Orderpage} from './pages/Orderpage'
import {Aboutpage} from './pages/Aboutpage';
import { Vieworderspage } from './pages/Vieworderspage';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Landingpage/>}></Route>
        <Route path='/driver' element={<Driverpage/>}></Route>
        <Route path='/assignorder' element={<Orderpage/>}></Route>
        <Route path='/viewdrivers' element={<Viewdriverspage/>}></Route>
        <Route path='/about' element={<Aboutpage/>}></Route>
        <Route path='/vieworders' element={<Vieworderspage/>}></Route>
        
      </Routes>
      
    </div>
  );
}

export default App;

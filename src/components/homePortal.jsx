
import { Routes,Route } from "react-router-dom";
import Home from "./dashBoard";
import Logo from "./logo";
import Navbar from "./navbar"
import EmployeeList from "./employeeList";
import CreateEmployee from "./createEmployee";
import EditEmployee from "./editEmplyee";


const HomePortal = () => {
    return (
        <div className="HomePortal">
            <Logo/>
             <Navbar/>
             <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/employee-list' element={<EmployeeList/>} />
                <Route path='/create-employee' element={<CreateEmployee/>} />
                <Route path='/edit-employee' element={<EditEmployee/>} />
              </Routes>
             
        </div>
      );
}
 
export default HomePortal;
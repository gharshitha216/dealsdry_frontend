
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import '../styles/employeeList.css';
import { Link } from "react-router-dom";
const EmployeeList = () => {

    let [list, setList] = useState([])

    useEffect(() => {
        let fetchData = async () => {
            let res = await axios.get("http://localhost:4000/employees")
            let data = await res.data
            setList(data)
            console.log(data);
        }
        fetchData()
    }, [])

    let deleteId = (_id,name) => {
        setList(list.filter((x)=> x._id !== _id));
        alert(`${name} has been deleted`)
    }

    return (
        <div className="EmplyeeList">
            <div className="nav1 bg-warning container-fluid px-5 m-0 mt-0">
                <h4> Employee List</h4>
            </div>

            <div className="employee_list ">

                {list.map(x => {
                    return (
                        <div className="empData">
                            <p>Uniue Id:{x._id}</p>
                            <div className="img">
                            <img src={x.image} height="330" width="170" alt="" />

                            <div className="bookcard">
                                <h4>Name:{x.name}</h4>
                                <p><b>Email:</b><a href="">{x.email}</a></p>
                                <p><b>MobileNo:</b> {x.mobileNo}</p>
                                <p><b>Designation:</b>{x.designation}</p>
                                <p><b>Gender:</b>{x.gender}</p>
                                <p><b> Course:</b>{x.course}</p>
                                <p><b>Create Date:</b>{x.date}</p>
                                <button  className="read"><Link to={'/home/edit-employee'}>Update</Link> </button> <span>    </span>
                                <button onClick={()=>{deleteId(x._id,x.name)}}>Delete</button> 
                            </div>
                        </div>
                          
                        </div>
                    )
                })}

            </div>

        </div>
    );
}

export default EmployeeList;
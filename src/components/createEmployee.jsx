import '../styles/createEmployee.css';
import { useState } from "react";
import axios from "axios";

const CreateEmployee = () => {

    let [name, setName] = useState();
    let [email, setEmail] = useState();
    let [mobileNo, setMobileNo] = useState();
    let [designation, setDesignation] = useState();
    let [gender, setGender] = useState()
    let [course, setCourse] = useState()
    let [image, setImage] = useState()
    let [date, setDate] = useState()

    let createEmployee = (e) => {
        e.preventDefault()
        let data = { name, email, mobileNo, designation, gender, course, image,date }
        if (name && email && mobileNo && designation && gender && course && image && date) {
            axios.post("http://localhost:4000/create-employee", data)
                .then(res => {
                    alert(res.data.message)
                }).catch(err => {
                    alert(err.data.message)
                })

        } else {
            alert("Please fill all the fields")
        }
    }



    return (
        <div className="c-employee ">
  
            <div className="nav1 bg-warning container-fluid px-5 m-0 mt-0">
                <h4>Create Employee</h4>
            </div>

            <div className="Form form mx-5" >

                <form action=""  onSubmit={createEmployee}>
                    <div className="name">
                        <label htmlFor="Name">Name</label>
                        <input type="name"
                            placeholder="Enter Name"
                            className="form-control w-50  p-2 "
                            name="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}

                        />
                    </div>
                    <div className="email">
                        <label htmlFor="email">Email</label>
                        <input type="email"
                            placeholder="Enter Email"
                            className="form-control w-50   p-2 "
                            name="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}

                        />
                    </div>
                    <div className="mobileNo">
                        <label htmlFor="mobileNo">Mobile No</label>
                        <input type="tel"
                            placeholder="Enter Mobile No"
                            className="form-control w-50  p-2 "
                            name="MobileNo"
                            value={mobileNo}
                            onChange={(e) => setMobileNo(e.target.value)}
                        />

                    </div>
                    <div className="designation">
                        <label htmlFor="designation">Designation</label>
                        <select name="designation"
                            className="form-control w-50   p-2 "
                            value={designation}
                            onChange={(e) => setDesignation(e.target.value)}
                        >
                            <option value=""></option>
                            <option value="Hr">Hr</option>
                            <option value="Manager">Manager</option>
                            <option value="Sales ">Sales</option>
                        </select>
                    </div>

                    <div className="gender">
                        <label for="Gender">Gender</label>
                        <input type="text"
                            placeholder="M/F"
                            className="form-control w-50  p-2 "
                            name="Gender"
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                        />
                    </div>
                    <div className="course">
                        <label htmlFor="course">Course</label> <br />
                        <input type="text"
                            placeholder="MCA/BCA/BSc"
                            className="form-control w-50  p-2 "
                            name="course"
                            value={course}
                            onChange={(e) => setCourse(e.target.value)}

                        />
                      
                    </div>
                    <div className="image d-flex">
                        <label htmlFor="Image">Image:  <br /></label>
                        <input type="file"
                            placeholder="Choose image"
                            name="Image"
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                        />
                    </div>
                    <div className="date">
                    <label htmlFor="Date">Date <br /></label>
                        <input type="date"
                            placeholder="Choose the date"
                            name="Date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                        />
                    </div>
                    
                    <div className="signUP_button w-50 ">
                        <button className="btn btn-success  w-50">Submit </button>
                    </div>

                </form>
            </div>
        </div>

    );
}

export default CreateEmployee;
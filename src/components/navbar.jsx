const Navbar = () => {
    return (
       <div >
          <nav className="navbar  sticky-top navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid bg-info   px-5">
                    <a className="navbar-brand" href="/"><h2>Login Page</h2></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse cnav" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="btn text-dark fs-5" href="/home">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="btn text-dark fs-5" href="/home/create-employee">Create Employee</a>
                            </li>
                            <li className="nav-item">
                                <a className="btn text-dark fs-5" href="/home/employee-list">Employee List</a>
                            </li>
                            <li className="nav-item">
                                <a className="btn text-dark fs-5" href="/">Logout</a>
                            </li>
                           
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    );
}

export default Navbar;
import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <div className='container-fluid'>
            <nav className="navbar navbar-expand-sm navbar-light bg-light">
                <div className="container">
                    <NavLink className="navbar-brand" to="/">Students Management</NavLink>
                    <button
                        className="navbar-toggler d-lg-none"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapsibleNavId"
                        aria-controls="collapsibleNavId"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" to="/" aria-current="page"
                                >Students Data
                                    <span className="visually-hidden">(current)</span></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/add">Add Student</NavLink>
                            </li>
                           
                        </ul>
                        {/* <form className="d-flex my-2 my-lg-0">
                            <input
                                className="form-control me-sm-2"
                                type="text"
                                placeholder="Search"
                            />
                            <button
                                className="btn btn-outline-success my-2 my-sm-0"
                                type="submit"
                            >
                                Search
                            </button>
                        </form> */}
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Header
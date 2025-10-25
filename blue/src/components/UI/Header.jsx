import "bootstrap/dist/css/bootstrap.min.css";
import { SiBigbluebutton } from "react-icons/si";
import { NavLink } from "react-router-dom";


export const Header = () => {
 

  return (
    
      <nav className="navbar bg-body-tertiary w-100">
        <div className="container-fluid ">
          <NavLink className="navbar-brand" to="/">
            
            <SiBigbluebutton /> BLUE
          </NavLink>
          <ul className="nav justify-content-end">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/">
                Link
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Link
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>

          <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </nav>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                <SiBigbluebutton /> BLUE
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <NavLink className="nav-link active" aria-current="page" to="/">

                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">
                    About
                  </NavLink>
                </li>
                <li className="nav-item dropdown">
                  <NavLink
                    className="nav-link dropdown-toggle"
                    to="/"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown
                  </NavLink>
                  <ul className="dropdown-menu">
                    <li>
                      <NavLink className="dropdown-item" to="/">
                        Action
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-item" to="/">
                        Another action
                      </NavLink>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <NavLink className="dropdown-item" to="/">
                        Something else here
                      </NavLink>
                    </li>
                  </ul>
                </li>
              </ul>


              
              </div>
            </div>
          </div>
        
      </nav>

  );
};

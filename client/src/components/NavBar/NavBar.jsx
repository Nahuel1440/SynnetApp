import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../../redux/actions/authorization";

import NavDropdown from "react-bootstrap/NavDropdown";

export default function NavBar() {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  return (
    // <>
    //     <div>
    //       <h1>
    //         TENNIS CHAMPIONSHIP{" "}
    //       </h1>
    //       <div>
    //         <button>
    //           <Link to={"/HomeAdmin"}>Admin</Link>
    //         </button>
    //         <button>
    //           <Link to={"/Players"}>Players</Link>
    //         </button>
    //       </div>
    //     </div>
    // </>

    <nav className="navbar navbar-expand-lg bg-dark navbar-dark position-fixed nav">
      <div className="container-fluid pe-4">
        <Link
          className="navbar-brand ps-4"
          style={{ fontWeight: "bold", color: "#A7D129" }}
          to={"/"}
        >
          Tennis APP
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon text-white"></span>
        </button>
        <ul className="navbar-nav mb-2 mb-lg-0 ms-auto pe-4 bg-morning">
          {auth.loggedIn ? (
            <li className="nav-item">
              <Link
                className="nav-link ms-auto"
                style={{ fontWeight: "bold", color: "#e0e6e8" }}
                to={"/Users"}
              >
                Users
              </Link>
            </li>
          ) : null}
          
          <li className="nav-item">
        
            <a 
              className="nav-link ms-auto"
              style={{ fontWeight: "bold", color: "#e0e6e8" }}
              href="/Gallery"
            >
              Multimedia
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link ms-auto"
              style={{ fontWeight: "bold", color: "#e0e6e8" }}
              href="/#sponsorLP"
            >
              Sponsor
            </a>
          </li>
          <Link
                    className="nav-link ms-auto"
                    style={{ fontWeight: "bold", color: "#e0e6e8" }}
                    to={"/TournamentsToShow"}
                  >
                    Tournaments
                  </Link>
        </ul>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0 ms-auto pe-4 bg-morning">
            {auth.loggedIn ? (
              <>
                <li>
                  <img
                    src={auth.currentUser.picture}
                    width="30"
                    height="30"
                    className="rounded-circle"
                    alt="profileImg"
                  />
                </li>
                <li>
                  <NavDropdown id="basic-nav-dropdown">
                    {auth.currentUser.is_admin ? (
                      <NavDropdown.Item href="/HomeAdmin">
                        Admin
                      </NavDropdown.Item>
                    ) : <NavDropdown.Item href={`/profile/${auth.currentUser.dni}`}>
                    Profile
                  </NavDropdown.Item>}
                    <NavDropdown.Item>
                      <NavDropdown.Item href=""

                        onClick={() => {
                          dispatch(logoutUser());
                        }}
                      >
                        Logout
                        </NavDropdown.Item>
                    </NavDropdown.Item>
                  </NavDropdown>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link
                    className="nav-link ms-auto"
                    style={{ fontWeight: "bold", color: "#e0e6e8" }}
                    to={"/login"}
                  >
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link ms-auto"
                    style={{ fontWeight: "bold", color: "#e0e6e8" }}
                    to={"/SignIn"}
                  >
                    Signup
                  </Link>
                </li>
              </>
            )}
            
          </ul>
        </div>
      </div>
    </nav>
  );
}

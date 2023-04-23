import React from 'react'
import { Link } from "react-router-dom";
import { Outlet  } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import logo from ".././resources/logoO.jpg"
import './nav.css';

export default function Nav() {

  return (
    <>
      <nav>
        <>
        <div className="nav--links" >
          <img className="nav--logo" src={logo} alt="logo" />
          {
            <>
            <div className="user-login">
              <Link className="nav--link" to="/">
                <FontAwesomeIcon icon={faSignInAlt} />
              </Link>
            </div>
            </>
          }
        </div>
        </>
      </nav>
      <Outlet />
    </>
  )
}
//box-shadow: 0px 4px 8px rgba(79, 94, 113, 0.1), 0px 2px 4px rgba(79, 94, 113, 0.11), 0px 0px 2px rgba(79, 94, 113, 0.12);
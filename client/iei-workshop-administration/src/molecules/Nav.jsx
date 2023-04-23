import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { Outlet  } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaSignInAlt } from '@fortawesome/free-solid-svg-icons';
import logo from "../../resources/logo.jpg"
import './nav.css';

export default function Nav() {
  const user = useSelector((state) => state.user)

  return (
    <>
      <nav>
        <>
        <div className="nav--links">
          <img className="nav--logo" src={logo} alt="logo" />
          {
            user.logged && user.type &&
            <>
              {/* <Link className="nav--link" to="/">Home</Link> */}
              <Link className="nav--link" to="/">
                <FontAwesomeIcon icon={FaSignInAlt} />
              </Link>
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
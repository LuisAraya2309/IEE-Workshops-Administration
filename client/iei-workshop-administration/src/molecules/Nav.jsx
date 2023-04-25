import React from 'react'
import { Link } from "react-router-dom";
import { Outlet  } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import logo from "../resources/logo.jpg"
import { useLocation,useNavigate } from 'react-router';
import './nav.css';

export default function Nav() {
  const {state} = useLocation(),
  userLogged = state.user,
  sendingUser = {state:{user:userLogged}}
  const navigate = useNavigate();
  const returnMainMenu = () => {
    navigate('/AdminPage',sendingUser)
  };

  return (
    <>
      <nav>
        <>
        <div className="nav--links" >
          <img className="nav--logo" src={logo} alt="logo" onClick = {returnMainMenu} />
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
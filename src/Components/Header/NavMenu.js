import React from 'react'
import "./Header.css"
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";


const NavMenu = ({ item }) => {
  const location = useLocation();
  const navigate = useNavigate();
  let arr = location.pathname?.split("/");
  let lastvalue = arr[arr.length - 1].trim().replace(/_/g, " ");
  let filt = item.subNav?.find((s)=>s.subTitle === lastvalue)

  return (
    <>
      <li className={item.title === lastvalue || filt  ?"nav-item active" : "nav-item"}>
        {!item?.subNav ? (
          <NavLink
            className="nav-link"
            to={item.path}
          >
            <div>{item.title}</div>
          </NavLink>
        ) : (
          <DropdownButton
            className="nav-link test"
            id="dropdown-basic-button"
            title={item.title}
          >
            {item.subNav.map((item, i) => {
            
              return (
                <Dropdown.Item
                  key={i}
                  className={item.subTitle === lastvalue ? "active" : " "}
                  onClick={() => {navigate(item.path) }}
                >
                  {item.subTitle}
                </Dropdown.Item>
              );
            })}
          </DropdownButton>
        )}
      </li>
    </>
  )
}

export default NavMenu
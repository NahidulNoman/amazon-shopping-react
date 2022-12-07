import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/UserContext";
import picture from "../../images/Logo.svg";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const removeSignOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <nav className="header">
      <img src={picture} alt="" />
      <div>
        {/* className=
                {({isActive})=> isActive ? 'active' : undefined} to="./shop" */}
        <span className="text">{user?.email}</span>
        <NavLink to="./shop">Shop</NavLink>
        <NavLink to="./order">Order</NavLink>
        <NavLink to="./inventory">Inventory</NavLink>
        <NavLink to="./about">About</NavLink>
        {user?.email ? (
          <button onClick={removeSignOut}>Sign Out</button>
        ) : (
          <>
            <NavLink to="./signup">SignUp</NavLink>
            <NavLink to="./login">LogIn</NavLink>
          </>
        )}
      </div>
    </nav>
  );
};

export default Header;

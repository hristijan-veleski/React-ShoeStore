import { useSelector } from "react-redux";
import {NavLink } from "react-router-dom";
import AccountButton from "../Account/AccountButton";
import CartButton from "../Cart/CartButton";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {

  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  const disabledLinkClasses = isLoggedIn ? '':classes.disabledLink;


  return (
    <header className={classes.nav}>
      <NavLink to="/" className={classes.logo}>React Shoe Store</NavLink>
      
      <ul className={classes.links}>
        <li>
          <NavLink to="/model-selection/nike" className={(navigationData) =>
                navigationData.isActive ? `${disabledLinkClasses} ${classes.active}` : disabledLinkClasses
              } >Nike</NavLink>
        </li>
        <li>
          <NavLink to="/model-selection/adidas" className={(navigationData) =>
                navigationData.isActive ? `${disabledLinkClasses} ${classes.active}` : disabledLinkClasses
              }>Adidas</NavLink>
        </li>
        <li>
          <NavLink to="/model-selection/puma" className={(navigationData) =>
                navigationData.isActive ? `${disabledLinkClasses} ${classes.active}` : disabledLinkClasses
              }>Puma</NavLink>
        </li>
      </ul>

      <div className={classes.actions}>
        <AccountButton />
        <CartButton />
      </div>
    </header>
  );
};

export default MainNavigation;

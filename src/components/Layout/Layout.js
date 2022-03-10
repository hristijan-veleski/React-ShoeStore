import MainNavigation from "./MainNavigation";

import classes from "./Layout.module.css";

const Layout = (props) => {
  return (
    <div className={classes.layout}>
      <MainNavigation />
      <main className={`${classes.content} ${props.extraClass}`}>
        {props.children}
      </main>
      {/* <footer className={classes.content}>
      <ContactFooter />
      </footer> */}
    </div>
  );
};

export default Layout;

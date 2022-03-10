import classes from "./ShoeModelSelection.module.css";
import { Link } from "react-router-dom";

const ShoeModelSelection = () => {
  return (
    <div className={classes.shoeModelContainer}>
      <h1 className={classes.title}>Choose your model</h1>
      <ul className={classes.components}>
        <li className={classes.component}>
          <Link to="/model-selection/nike">
            <img
              className={classes.modelImage}
              src="https://th.bing.com/th/id/R.9936f194a9529e87925d1f0363af0789?rik=tqMbkJ0cohl9tA&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2fnike-swoosh-transparent-background%2fnike-swoosh-transparent-background-1.png&ehk=W5Bk%2fMscU0mD20Ao0n6Um%2bEO8wQmLjvdBFXMcRPy8P0%3d&risl=&pid=ImgRaw&r=0"
              alt=""
            ></img>
          </Link>
          <div className={classes.modelText}>
            <Link to="/model-selection/nike" className={classes.modelTitle}>
              Nike
            </Link>
            <p className={classes.description}>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
        </li>
        <li className={classes.component}>
          <Link to="/model-selection/adidas">
            <img
              className={classes.modelImage}
              src="https://th.bing.com/th/id/R.968e6054fdfdc5d46da1bc4d6c9996a4?rik=Op%2bqqznF8YLJWQ&pid=ImgRaw&r=0"
              alt=""
            ></img>
          </Link>
          <div className={classes.modelText}>
            <Link to="/model-selection/adidas" className={classes.modelTitle}>
              Adidas
            </Link>
            <p className={classes.description}>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
        </li>
        <li className={classes.component}>
          <Link to="/model-selection/puma">
            <img
              className={classes.modelImage}
              src="https://1.bp.blogspot.com/-iXhpYBL69Kc/YFIdVPPdJbI/AAAAAAAAF-0/7bWIL9r_OKYo7yCYBjO7IOjK_mi-DpMaACLcBGAsYHQ/s400/PNGKH_00001208.png"
              alt=""
            ></img>
          </Link>
          <div className={classes.modelText}>
            <Link to="/model-selection/puma" className={classes.modelTitle}>
              Puma
            </Link>
            <p className={classes.description}>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ShoeModelSelection;

import { Link } from "react-router-dom";
import classes from "./Model.module.css";


const Model = (props) => {

  

  return (
    <li className={classes.item}>
      <img src={props.image} alt="" className={classes.image} />
      <h3 className={classes.title}>{props.title}</h3>
      <p className={classes.price}>{`${props.price}.00$`}</p>
      <Link to={`/model-selection/${props.id}`} className={classes.viewButton}>View Item</Link>
    </li>
  );
};

export default Model;

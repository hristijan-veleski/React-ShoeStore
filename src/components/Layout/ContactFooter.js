import classes from "./ContactFooter.module.css";

const ContactFooter = () => {
  return (
    <div className={classes.footer}>
      <i class="fab fa-facebook"></i>
      <i class="fab fa-snapchat"></i>
      <i class="fab fa-instagram"></i>
      <i class="fab fa-youtube"></i>
    </div>
  );
};

export default ContactFooter;

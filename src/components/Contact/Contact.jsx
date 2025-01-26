import PropTypes from "prop-types";
import { HiUser } from "react-icons/hi";
import { HiPhone } from "react-icons/hi";
import styles from "./Contact.module.css";

const Contact = ({ id, name, number, onDeleteContact }) => (
  <li className={styles.contactItem}>
    <div className={styles.contactContainer}>
      <p className={styles.contactInfo}>
        <HiUser className={styles.contactIcon} size="18" />
        {name}
      </p>
      <p className={styles.contactInfo}>
        <HiPhone className={styles.contactIcon} size="18" />
        {number}
      </p>
    </div>
    <button onClick={() => onDeleteContact(id)} className={styles.deleteButton}>
      Delete
    </button>
  </li>
);

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default Contact;

import React, { Fragment, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Link, useLocation, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./Modals.module.scss";

const Modals = ({ children, onCloseModal }) => {
  const locationURL = useLocation();
  const navigate = useNavigate();
  return ReactDOM.createPortal(
    <>
      <div className={styles.overlay} />
      <div className={styles.card}>
        <button className={styles["close-btn"]} onClick={onCloseModal}>
          <i
            className='fas fa-times'
            onClick={() => navigate(locationURL.pathname)}
          />
        </button>
        <div className={styles["card-container"]}>{children}</div>
      </div>
    </>,
    document.getElementById("modals")
  );
};
Modals.propTypes = {};

Modals.defaultProps = {
  onConfirm: () => {},
};

export default Modals;

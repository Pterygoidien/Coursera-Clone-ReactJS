import React, { Fragment, useEffect, useState } from "react";
import ReactDOM from "react-dom";

import PropTypes from "prop-types";
import styles from "./ErrorModals.module.css";
import Button from "./Button";

const ErrorModal = ({ type, content, onConfirm }) => {
  const { header, body } = content;
  return ReactDOM.createPortal(
    <>
      <div className={styles.overlay} onClick={onConfirm} />
      <div className={styles.card}>
        <div className={styles.header}>
          <h2>{header}</h2>
        </div>
        <div className={styles.body}>{body}</div>
        <div className={styles.footer}>
          <button onClick={onConfirm}>Okay</button>
        </div>
      </div>
    </>,
    document.getElementById("modals")
  );
};
Modals.propTypes = {
  type: PropTypes.string.isRequired,
  content: PropTypes.object.isRequired,
  onConfirm: PropTypes.func.isRequired,
};

Modals.defaultProps = {
  type: "error",
  content: {
    header: "An error occured",
    body: "Something unexpected happened.",
  },
  onConfirm: () => {},
};

export default ErrorModal;

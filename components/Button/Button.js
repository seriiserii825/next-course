import React from 'react';
import Link from "next/link";
import styles from "./Button.module.css";

function Button({ link, children, onClick, type }) {
  const typeBtn = type ? type : 'button';
  if (link) {
    return (
      <Link href={link}>
        <a className={styles.btn}>{children}</a>
      </Link>
    );
  }
  return (
    <button onClick={onClick} className={styles.btn} type={typeBtn}>{children}</button>
  )
}

export default Button;
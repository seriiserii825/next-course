import React from "react";
import Link from "next/link";
import classes from "../styles/Header.module.css";

function Header() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href="/">NextEvents</Link>
      </div>
      <nav className={classes.navigation}>
        <ul>
          <li>
            <Link href="/events">Browse All Events</Link>
          </li>
          <li>
            <Link href="/feedback">Feedbacks list</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

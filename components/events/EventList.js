import React from 'react';
import EventItem from "./EventItem";
import styles from "./../../styles/events/event-list.module.css";

function EventList({ items }) {

  return (
    <ul className={styles.list}>
      {items.map(item => <EventItem key={item.id} {...item}/>)}
    </ul>
  );
}

export default EventList;
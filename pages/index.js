// import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { getFeaturedEvents } from "../dumy-data";
import EventList from "../components/events/EventList";

export default function Home() {
  const items = getFeaturedEvents();

  return (
    <div className={styles.container}>
      <EventList items={items}/>
    </div>
  )
}

import styles from "../styles/Home.module.css";
import EventList from "../components/events/EventList";
import getEvents from "../helpers/get-events";

export default function Home({ items }) {
  if (!items) {
    return <h2>Loading...</h2>;
  }
  return (
    <div className={styles.container}>
      <EventList items={items} />
    </div>
  );
}

export async function getStaticProps() {
  try {
    const events = await getEvents();
    const featuredEvents = events.data.filter((event) => event.isFeatured);
    return {
      props: {
        items: featuredEvents
      }
    };
  } catch (error) {
    return {
      notFound: true
    };
  }
}

import Head from "next/head";
import styles from "../styles/Home.module.css";
import EventList from "../components/events/EventList";
import getEvents from "../helpers/get-events";

export default function Home({ items }) {
  if (!items) {
    return <h2>Loading...</h2>;
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Home page</title>
        <meta name="description" content="Some desc" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
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

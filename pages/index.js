import axios from "axios";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { getFeaturedEvents } from "../dumy-data";
import EventList from "../components/events/EventList";

export default function Home({ users }) {
  const items = getFeaturedEvents();

  return (
    <div className={styles.container}>
      <h1 className="center" style={{ textDecoration: "underline" }}>
        From jsonplaceholder
      </h1>
      <ul className="list">
        {users.length &&
          users.map(({ id, name }) => {
            const url = `/user/${id}`;
            return (
              <li key={id}>
                <Link href={url}>{name}</Link>
              </li>
            );
          })}
      </ul>
      <EventList items={items} />
    </div>
  );
}

export async function getStaticProps() {
  try {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    return {
      props: {
        users: data
      }
    };
  } catch (error) {
    return {
      props: {
        users: []
      },
      notFound: true
    };
  }
}

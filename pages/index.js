import axios from "axios";
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
      <ul>
        {users.length &&
          users.map(({ id, name, email }) => (
            <li key={id}>
              <p>
                <strong>{name}</strong>
              </p>
              <p>
                <a href={`mailto:${email}`}>
                  <em>{email}</em>
                </a>
              </p>
            </li>
          ))}
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
    console.log(error.message, "error.message");
    return {
      props: {
        users: []
      }
    };
  }
}

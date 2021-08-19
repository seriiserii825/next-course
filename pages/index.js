import Head from "next/head";
import axios from "axios";
import styles from "../styles/Home.module.css";
import EventList from "../components/events/EventList";
import getEvents from "../helpers/get-events";
import { useImmer } from "use-immer";

export default function Home({ items }) {
  const [state, setState] = useImmer({
    user: "",
    email: "",
    feedback: []
  });

  function userHandler(e) {
    setState((draft) => {
      draft.user = e.target.value;
    });
  }

  function emailHandler(e) {
    setState((draft) => {
      draft.email = e.target.value;
    });
  }

  async function submitHandler(event) {
    event.preventDefault();
    if (state.user === "" || state.email === "") {
      return false;
    }
    const formData = {
      user: state.user,
      email: state.email
    };

    await fetch("/api/hello", {
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(formData),
      method: "POST"
    });
    setState((draft) => {
      draft.user = "";
      draft.email = "";
    });
  }

  async function feedbackHandler() {
    const res = await axios.get("/api/hello");
    setState((draft) => {
      draft.feedback = res.data.data;
    });
  }

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
      <form onSubmit={submitHandler}>
        <input
          value={state.user}
          onChange={userHandler}
          type="text"
          name="user"
          placeholder="User"
        />
        <input
          value={state.email}
          onChange={emailHandler}
          type="email"
          name="email"
          placeholder="Email"
        />
        <button type="submit">Submit</button>
      </form>
      <button onClick={feedbackHandler}>Get feedback</button>
      {state.feedback && state.feedback.length && (
        <ul>
          {state.feedback.map((item) => (
            <li key={item.email}>
              <strong>item.user</strong>
              <p>{item.email}</p>
            </li>
          ))}
        </ul>
      )}
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

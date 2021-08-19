import React from "react";
import Head from "next/head";
import EventList from "../../components/events/EventList";
import { getFilteredEvents } from "../../helpers/get-events";

const Slug = ({ events }) => {
  if (!events) {
    return <h2>Some error</h2>;
  }
  if (events.length === 0) {
    return <h2>Not found</h2>;
  }

  return (
    <>
      <Head>
        <title>Founded events | Events</title>
      </Head>
      <EventList items={events} />
    </>
  );
};

export default Slug;

export async function getServerSideProps(context) {
  const year = Number(context.params.slug[0]);
  const month = Number(context.params.slug[1]);
  try {
    if (!Number.isNaN(year) && !Number.isNaN(month)) {
      const filterdEvents = await getFilteredEvents({ year, month });

      return {
        props: {
          events: filterdEvents
        }
      };
    }
  } catch (e) {
    return {
      props: {
        sum: "sum"
      }
    };
  }
}

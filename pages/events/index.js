import React from "react";
import Head from "next/head";
import EventList from "../../components/events/EventList";
import EventsSearch from "./EventsSearch";
import getEvents from "../../helpers/get-events";

function AllEvents({ items }) {
  return (
    <>
      <Head>
        <title>Events</title>
      </Head>
      <EventsSearch />
      <EventList items={items} />
    </>
  );
}

export default AllEvents;

export async function getStaticProps() {
  try {
    const events = await getEvents();

    return {
      props: {
        items: events.data
      }
    };
  } catch (e) {
    return {
      notFound: true
    };
  }
}

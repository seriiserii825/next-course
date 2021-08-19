import React from "react";
import Head from "next/head";
import { getEventById } from "../../data/dumy-data";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";

const EventId = ({ event }) => {
  if (!event) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <Head>
        <title>{event.title} | Events site</title>
      </Head>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p className="description">{event.description}</p>
      </EventContent>
    </div>
  );
};

export default EventId;

export async function getServerSideProps(context) {
  const eventId = context.params.eventId;
  const event = await getEventById(eventId);
  return {
    props: {
      event: event
    }
  };
}

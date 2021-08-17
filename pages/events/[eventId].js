import React from 'react';
import { useRouter } from "next/router";
import { getEventById } from "../../dumy-data";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";

const EventId = () => {
  const router = useRouter();
  const id = router.query.eventId;
  const event = getEventById(id);

  if (!id) {
    return <p>Not found...</p>
  }
  return (
    <div>
      <EventSummary title={event.title}/>
      <EventLogistics date={event.date} address={event.location} image={event.image} imageAlt={event.title}/>
      <EventContent>
        <p className="description">{event.description}</p>
      </EventContent>
    </div>
  );
};

export default EventId;

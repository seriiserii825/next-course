import React from "react";
import { useRouter } from "next/router";
import { getFilteredEvents } from "../../dumy-data";
import EventList from "../../components/events/EventList";

const Slug = () => {
  const router = useRouter();
  const query = router.query.slug;

  if (!query) {
    return <p>Loading...</p>;
  }
  const year = +query[0];
  const month = +query[1];

  if (Number.isNaN(year) || Number.isNaN(month)) {
    return <h2 className="center">Invalid filter...</h2>;
  }

  const events = getFilteredEvents({ year, month });

  return (
    <>
      {events.length ? (
        <EventList items={events} />
      ) : (
        <h2 className="center">No events founded...</h2>
      )}
    </>
  );
};

export default Slug;

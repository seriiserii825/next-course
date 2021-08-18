import React, { Fragment } from 'react';
import { useRouter } from "next/router";
import { getFilteredEvents } from "../../dumy-data";
import EventList from "../../components/events/EventList";

const Slug = () => {
  const router = useRouter();
  const query = router.query.slug;

  if (!query) {
    return <p>Loading...</p>
  }
  const year = +query[0];
  const month = +query[1];

  if(isNaN(year) || isNaN(month)){
    return <h2 className="center">Invalid filter...</h2>
  }

  const events = getFilteredEvents({ year, month });

  return (
    <Fragment>
      {events.length ? <EventList items={events}/> : <h2 className="center">No events founded...</h2>}
    </Fragment>
  );
};

export default Slug;

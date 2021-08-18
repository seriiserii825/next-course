import React, { Fragment } from 'react';
import EventList from "../../components/events/EventList";
import { getAllEvents } from "../../dumy-data";
import EventsSearch from "./EventsSearch";

const AllEvents = () => {
  const items = getAllEvents();
  return (
    <Fragment>
      <EventsSearch/>
      <EventList items={items}/>
    </Fragment>
  );
};

export default AllEvents;

import React from "react";
import EventList from "../../components/events/EventList";
import { getAllEvents } from "../../dumy-data";
import EventsSearch from "./EventsSearch";

const AllEvents = () => {
  const items = getAllEvents();
  return (
    <>
      <EventsSearch />
      <EventList items={items} />
    </>
  );
};

export default AllEvents;

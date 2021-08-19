import React from "react";
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
    } else {
      return {
        props: {
          events: []
        }
      };
    }
  } catch (e) {
    console.log(e.message, "e.message");
    return {
      props: {
        sum: "sum"
      }
    };
  }
}

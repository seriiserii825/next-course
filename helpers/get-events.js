import path from "path";
import fs from "fs/promises";

export default async function getEvents() {
  try {
    const filePath = path.join(
      process.cwd(),
      "data",
      "dummy-json-backend.json"
    );
    const jsonData = await fs.readFile(filePath, "utf-8");
    const { events } = JSON.parse(jsonData);

    return { data: events };
  } catch (error) {
    return null;
  }
}

export async function getEventById(id) {
  const events = await getEvents();
  return events.data.find((event) => event.id === id);
}

export async function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter;
  const events = await getEvents();

  return events.data.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });
}

import axios from "axios";

const apiKey = process.env.REACT_APP_API_KEY;

const calendarIds: string[] = [
  "ssocdallas@gmail.com",
  "stjohndfw@gmail.com",
  "s37s3qvlf9nobhplqp0umlcafs@group.calendar.google.com", // St. Nicholas, McKinney
  "constantinehelen.com_km951qk3dli7a3839uebvfkrmc@group.calendar.google.com",
  "stsavaoca@gmail.com",
  "parish@archangelgabriel.church",
  "http://www.stmaximus.org/calendar/sync.ics",
  "lv6pbfqo779adameotte6kpd2o@group.calendar.google.com", // St. Peter Ft. Worth
  "r2vi89tjill2l1ud8cg1dbksp8@group.calendar.google.com", // St. Nektarios
  "http://www.stpauldenison.org/calendar/sync.ics",
  "3i4gcmqtoqm6e43kfvm37tnllupfraqe@import.calendar.google.com", // Holy Trinity
  "i0foh8u5am8ui8grpo1svvaun4@group.calendar.google.com" // Daily Feasts
];

export const getEvents = async () => {
  try {
    const allEvents = await Promise.all(
      calendarIds.map(async id => {
        try {
          const url = `https://www.googleapis.com/calendar/v3/calendars/${id}/events?key=${apiKey}`;
          const {
            data: { items }
          } = await axios.get(url);
          return items;
        } catch (e) {
          console.error(e);
        }
      })
    );
    return allEvents.filter(i => i);
  } catch (e) {
    console.error(e);
  }
};

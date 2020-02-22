import axios from 'axios';

const apiKey = process.env.REACT_APP_API_KEY;

// console.log(apiKey);

const calendarIds: string[] = [
  'ssocdallas@gmail.com',
  'stjohndfw@gmail.com',
  's37s3qvlf9nobhplqp0umlcafs@group.calendar.google.com', // St. Nicholas, McKinney
  'constantinehelen.com_km951qk3dli7a3839uebvfkrmc@group.calendar.google.com',
  'stsavaoca@gmail.com',
  'parish@archangelgabriel.church',
  'http://www.stmaximus.org/calendar/sync.ics',
  'lv6pbfqo779adameotte6kpd2o@group.calendar.google.com', // St. Peter Ft. Worth
  'r2vi89tjill2l1ud8cg1dbksp8@group.calendar.google.com', // St. Nektarios
  'http://www.stpauldenison.org/calendar/sync.ics'
];

// const feastDayCalendarId =
//   “i0foh8u5am8ui8grpo1svvaun4@group.calendar.google.com”;

const url = `https://www.googleapis.com/calendar/v3/calendars/ssocdallas@gmail.com/events?key=${apiKey}`;

export const getEvents = async () => {
  const {
    data: { items }
  } = await axios.get(url);
  return items;
};
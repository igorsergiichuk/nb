import { v4 as uuidv4 } from 'uuid';
import { Event } from './Event.jsx';

export const EventsContainer = (props) => {
  const { events } = props;

  return (
    <div>
      {events.map((event) => (
        <Event event={event} key={uuidv4()} />
      ))}
    </div>
  );
};

import { v4 as uuidv4 } from 'uuid';
import WrappedEvent from './Event.jsx';

export const EventsContainer = (props) => {
  const { events } = props;

  return (
    <div>
      {events.map((event) => (
        <WrappedEvent event={event} key={uuidv4()} />
      ))}
    </div>
  );
};

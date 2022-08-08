import { v4 as uuidv4 } from 'uuid';
import { EventsContainer } from '../event/EventsContainer';

export const Tab = (props) => {
  const { records } = props;

  return (
    <>
      {records.map((record) => {
        const { date, events } = record;

        return (
          <div key={uuidv4()} className="tab">
            <p key={uuidv4()}>{date}</p>
            <EventsContainer events={events} key={uuidv4()} />
          </div>
        );
      })}
    </>
  );
};

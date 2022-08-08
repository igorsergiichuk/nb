import { Link } from "react-router-dom";
import { Tags } from '../tags/Tags';
import {  Description  } from "../description/Description";
import ErrorBoundary from "../../logic/ErrorBoundary";

const Event = (props) => {
  const { event } = props;
  const { isFinished, isStarred, tags, title, description, id } = event;

  const yesNo = (question) => {
    return <span>{question ? 'yes' : 'no'}</span>;
  };

  return (
      <Link to={`/details/${id}`} className="event">
          <div className="description">
            <Description description={description} />
          </div>
          <div className="details">
            <p className="title">{title}</p>
            <p>Finished: {yesNo(isFinished)}</p>
            <p>Stared: {yesNo(isStarred)}</p>
            <Tags tags={tags} />
              <button onClick={(e) => {
                  e.preventDefault();
                  throw new Error('wtf?')
              }}>error</button>
          </div>
      </Link>
  );
};

const WrappedEvent = (props) => {
    return (
        <ErrorBoundary>
            <Event event={props.event} />
        </ErrorBoundary>
    );
};

export default WrappedEvent;
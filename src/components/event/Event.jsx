import { createBrowserHistory } from 'history';
import { useDispatch } from 'react-redux';
import selectEvent from '../../state/actions/select-event';
import { Tags } from '../tags/Tags';
import { Description } from '../description/Description';
import ErrorBoundary from '../../logic/ErrorBoundary';

const Event = (props) => {
  const { event } = props;
  const { isFinished, isStarred, tags, title, description, id } = event;

  const browserHistory = createBrowserHistory();

  const yesNo = (question) => {
    return <span>{question ? 'yes' : 'no'}</span>;
  };
  const dispatch = useDispatch();

  return (
    <div
      className="event"
      onClick={(e) => {
        e.preventDefault();
        dispatch(selectEvent(event));
        browserHistory.push(`/details/${id}`);
      }}
    >
      <div className="description">
        <Description description={description} />
      </div>
      <div className="details">
        <p className="title">{title}</p>
        <p>Finished: {yesNo(isFinished)}</p>
        <p>Stared: {yesNo(isStarred)}</p>
        <Tags tags={tags} />
        <button
          onClick={(e) => {
            e.preventDefault();
            throw new Error('wtf?');
          }}
        >
          error
        </button>
      </div>
    </div>
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

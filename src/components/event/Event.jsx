import { Tags } from '../tags/Tags';

export const Event = (props) => {
  const { event } = props;
  const { isFinished, isStarred, tags } = event;
  console.log(event);

  const yesNo = (question) => {
    return <span>{question ? 'yes' : 'no'}</span>;
  };

  return (
    <>
      <div>
        <span>Finished: {yesNo(isFinished)}</span>
        <span>Stared: {yesNo(isStarred)}</span>
        <Tags tags={tags} />
      </div>
    </>
  );
};

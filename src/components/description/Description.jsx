import { v4 as uuidv4 } from 'uuid';

export const Description = (props) => {
  const { description } = props;

  return (
    <>
      {description.map((event) => {
        const { date, text } = event;
        return (
          <div key={uuidv4()}>
            <p>{date}</p>
            <p>{text}</p>
          </div>
        );
      })}
    </>
  );
};

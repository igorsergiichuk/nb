import { v4 as uuidv4 } from 'uuid';
import { Tag } from './Tag';

export const Tags = (props) => {
  const { tags } = props;

  return (
    <>
      {tags ? (
        <p>
          {tags.map((tag) => (
            <Tag tag={tag} key={uuidv4()} />
          ))}
        </p>
      ) : (
        ''
      )}
    </>
  );
};

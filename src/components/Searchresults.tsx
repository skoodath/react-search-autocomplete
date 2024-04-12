import { UserListProps } from '../lib/filterNames';
import styles from './searchresult.module.scss';
import { useEffect, useRef } from 'react';

type SearchResultProps = {
  userNames: UserListProps[];
  onSelectUser: (id: number) => void;
  setUserNameList: React.Dispatch<React.SetStateAction<UserListProps[] | []>>;
};

const Searchresults = ({
  userNames,
  onSelectUser,
  setUserNameList,
}: SearchResultProps) => {
  const resultRef = useRef<HTMLDivElement>(null);

  const handleClick = (id: number) => {
    onSelectUser(id);
  };

  useEffect(() => {
    document.addEventListener('click', () => {
      if (!resultRef.current) {
        setUserNameList([]);
      }
    });
  }, [resultRef]);

  return (
    <div className={styles.result__wrapper} ref={resultRef}>
      {userNames.map((user) => (
        <p
          className={styles.result__list}
          key={user.id}
          onClick={() => handleClick(user.id)}
        >
          {user.fullName}
        </p>
      ))}
    </div>
  );
};

export default Searchresults;

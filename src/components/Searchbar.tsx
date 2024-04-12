import styles from './searchbar.module.scss';
import { IoSearchOutline } from 'react-icons/io5';

type SearchStateProps = {
  search: string;
  onSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Searchbar = ({ search, onSearch }: SearchStateProps) => {
  return (
    <div className={styles.search__wrapper}>
      <IoSearchOutline />
      <input
        type="text"
        value={search}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onSearch(e)}
      />
    </div>
  );
};

export default Searchbar;

import { useState } from 'react';
import styles from './app.module.scss';
import Searchbar from './components/Searchbar';
import Searchresults from './components/Searchresults';
import Displayresult from './components/Displayresult';
import filterNames, { UserListProps } from './lib/filterNames';

const url = 'https://dummyjson.com/users';

export type UsersProps = {
  users: Record<string, any>[];
};

function App() {
  const [users, setUsers] = useState<Record<string, any>[] | []>([]);
  const [userNameList, setUserNameList] = useState<UserListProps[]>([]);
  const [searchText, setSearchText] = useState('');
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const getUsers = async (searchValue: string) => {
    const response = await fetch(url);
    const data = await response.json();
    const filteredList = filterNames(data.users, searchValue);
    setUsers(data.users);
    setUserNameList(filteredList);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
    getUsers(e.target.value);
  };

  const handleShowUserDetails = (id: number) => {
    setSelectedId(id);
    setUserNameList([]);
    setSearchText('');
  };

  const selectedUser = users.find((user) => user && user.id === selectedId);

  return (
    <>
      <div className={styles.app__wrapper}>
        <div className={styles.search__wrapper}>
          <Searchbar search={searchText} onSearch={handleSearch} />
          {userNameList.length > 0 && (
            <Searchresults
              userNames={userNameList}
              onSelectUser={handleShowUserDetails}
              setUserNameList={setUserNameList}
            />
          )}
        </div>

        {selectedUser && <Displayresult selectedUser={selectedUser} />}
      </div>
    </>
  );
}

export default App;

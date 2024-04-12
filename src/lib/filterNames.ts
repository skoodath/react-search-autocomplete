export type UserListProps = {
  id: number;
  fullName: string;
};

export default function filterNames(
  userlist: Record<string, any>[],
  searchValue: string
) {
  const userNames: UserListProps[] = userlist.map(
    (user) =>
      user && { id: user.id, fullName: `${user.firstName} ${user.lastName}` }
  );
  const filteredList = userNames.filter(
    (username) =>
      searchValue && username.fullName.toLowerCase().includes(searchValue)
  );
  return filteredList;
}

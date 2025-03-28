export type User = {
  id: string;
  name: string;
  profilePictureVariant: number;
  friends: Array<Omit<User, 'friends'>>;
};

const USER_1 = {
  id: '1',
  name: 'Bob Johnson',
  profilePictureVariant: 1,
};

const USER_2 = {
  id: '2',
  name: 'Jimmy Jones',
  profilePictureVariant: 2,
};

const USER_3 = {
  id: '3',
  name: 'Jane Doe',
  profilePictureVariant: 3,
};

const USER_4 = {
  id: '4',
  name: 'Alex Smith',
  profilePictureVariant: 4,
};

export const USERS: Array<User> = [
  {
    ...USER_1,
    friends: [USER_2, USER_3, USER_4],
  },
  {
    ...USER_2,
    friends: [USER_1, USER_3],
  },
  {
    ...USER_3,
    friends: [USER_1, USER_2],
  },
  {
    ...USER_4,
    friends: [USER_1],
  },
];

import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext(null);

export function UserProvider({ children }) {
  const [users, setUsers] = useState([]);

  const addUser = (user) => {
    setUsers(prevUsers => [...prevUsers, user]);
  };

  const removeUser = (cid) => {
    setUsers(prevUsers => prevUsers.filter(user => user.cid !== cid));
  };

  return (
    <UserContext.Provider value={{ users, addUser, removeUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUsers() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUsers must be used within a UserProvider');
  }
  return context;
} 
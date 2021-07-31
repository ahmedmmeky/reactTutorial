import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users";

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    // setUsers(users) without the dependency in the useEffect will cause an infinite loop since useEffect already triggers a re-render
    setUsers(users);
    console.log(users);
  };

  useEffect(() => {
    //you cannot make this function an async because it can't return a promise;
    // can only make this async function inside the useEffect or outside
    getUsers();
  }, []);
  return (
    <>
      <h3>fetch data</h3>;
      {users.map((user) => {
        const { id, login, avatar_url, html_url } = user;
        return (
          <li key={id}>
            <img src={avatar_url} alt="" />
            <div>
              <h4>{login}</h4>
              <a href={html_url}>profile</a>
            </div>
          </li>
        );
      })}
    </>
  );
};

export default UseEffectFetchData;

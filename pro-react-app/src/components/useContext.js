import React, { useState, useContext } from 'react';

const userContext = React.createContext(null);

const UserComponent = () => {
  const [user] = useState({
    name: 'Maksim',
    age: 33,
  });

  return (
    <userContext.Provider value={user}>
      <h1>This is the Parent Component</h1>
      <hr />
      <ChildComponent />
    </userContext.Provider>
  );
};

function ChildComponent() {
  return (
    <div>
      <h2>This is Child Component</h2>
      <hr />
      <SubChildComponent />
    </div>
  );
}

function SubChildComponent() {
  const { name, age } = useContext(userContext);
  return (
    <div>
      <h3>This is Sub Child Component</h3>
      <h4>User Name: {name}</h4>
      <h4>User Age: {age}</h4>
    </div>
  );
}

export default UserComponent;

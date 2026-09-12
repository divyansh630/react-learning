import { useState } from "react";

export const UserDetails = () => {
  const [user, setUser] = useState({
    name: "Divyansh",
    age: 24,
    city: "Delhi",
  });

  const changeName = () => {
    setUser({
      ...user,
      name: "Rahul",
    });
  };

  const increaseAge = () => {
    setUser({
      ...user,
      age: user.age + 1,
    });
  };

  return (
    <div>
      <h1>User Details</h1>

      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>City: {user.city}</p>

      <button onClick={changeName}>Change Name</button>
      <button onClick={increaseAge}>Increase Age</button>
    </div>
  );
};

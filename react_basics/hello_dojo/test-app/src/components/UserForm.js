import React, { useState } from "react";

const UserForm = (props) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const createUser = (e) => {
    e.preventDefault();
    const newUser = { username, email, password };
    // setUsername("");
    // setEmail("");
    // setPassword("");
    console.log("Welcome", newUser);
  };

  return (
    <>
      <h1>Form Assignment</h1>
      <form className="form-control my-5" onSubmit={createUser}>
        <div className="p-2">
          <label>Username: </label>
          <input
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            // value={username}
          />
        </div>
        <div className="p-2">
          <label>Email Address: </label>
          <input
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            // value={email}
          />
        </div>
        <div className="p-2">
          <label>Password: </label>
          <input
            type="text"
            onChange={(e) => setPassword(e.target.value)}
            // value={password}
          />
        </div>
        <input
          className="btn btn-primary p-2"
          type="submit"
          value="Create User"
        />
      </form>
      <div className="container form-control">
        <h1>User Info</h1>
        <p>Username: {username}</p>
        <p>Email: {email}</p>
        <p>Password: {password}</p>
      </div>
    </>
  );
};

export default UserForm;

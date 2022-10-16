//import axios from "axios";
import React, { useState } from "react";
import { useRouter } from "next/router";

function addUser() {
  const [addUser, setUser] = useState({
    username: "",
    country: "",
    email: "",
    link: "",
    dob: "",
  });
  const handleChange = (e) => {
    const value = e.target.value;
    console.log("value", value);
    setUser({ ...addUser, [e.target.name]: value });
  };
}

const user = () => {
  return (
    <div>
      <form>
        <div>
          <input
            type="text"
            name="username"
            placeholder="Enter Username"
            onChange={handleChange}
            value={addUser.username}
          />
        </div>
        <div>
          <input
            type="text"
            name="country"
            placeholder="Enter Country"
            onChange={handleChange}
            value={addUser.username}
          />
        </div>
        <div>
          <input
            type="text"
            name="email"
            placeholder="Enter Email"
            onChange={handleChange}
            value={addUser.username}
          />
        </div>
        <div>
          <input
            type="text"
            name="link"
            placeholder="Enter Link"
            onChange={handleChange}
            value={addUser.username}
          />
        </div>
        <div>
          <input
            type="text"
            name="dob"
            placeholder="Enter Birthday"
            onChange={handleChange}
            value={addUser.username}
          />
        </div>
      </form>
    </div>
  );
};

export default user;

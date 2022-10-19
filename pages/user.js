import axios from "axios";
import React, { useState } from "react";
import { useRouter } from "next/router";

function addUser() {
  const router = useRouter();
  const [addUser, setUser] = useState({
    username: "",
    country: "",
    email: "",
    link: "",
    dob: "",
  });
  const onSubmit = async (e) => {
    e.preventDefault();
    let data = await axios.post(`http://localhost:3000/api/user`, addUser);
    if (data.data) router.push("/user");
    setUser({
      username: "",
      country: "",
      email: "",
      link: "",
      dob: "",
    });
  };

  const handleChange = (e) => {
    const value = e.target.value;
    console.log("value", value);
    setUser({ ...addUser, [e.target.name]: value });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
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
            value={addUser.country}
          />
        </div>
        <div>
          <input
            type="text"
            name="email"
            placeholder="Enter Email"
            onChange={handleChange}
            value={addUser.email}
          />
        </div>
        <div>
          <input
            type="text"
            name="link"
            placeholder="Enter Link"
            onChange={handleChange}
            value={addUser.link}
          />
        </div>
        <div>
          <input
            type="text"
            name="dob"
            placeholder="Enter Birthday"
            onChange={handleChange}
            value={addUser.dob}
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default addUser;

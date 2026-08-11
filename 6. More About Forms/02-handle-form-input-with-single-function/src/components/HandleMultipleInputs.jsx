import { useState } from "react";

function HandleMultipleInputs() {
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");
  // const [email, setEmail] = useState("");
  // const [phone, setPhone] = useState("");
  // const [address, setAddress] = useState("");

  const [forData, setForData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(forData);
  };

  const handleChange = (e) => {
    setForData((prevState) => {
      return { ...prevState, [e.target.id]: e.target.value };
    });
  };

  const {
    firstName,
    lastName, 
    username,
    password,
    confirmPassword,
    email,
    phone,
    address,
  } = forData;

  return (
    <form onSubmit={handleSubmit} style={{ padding: "2em" }}>
      <div className="form-group">
        <label htmlFor="firstName">First Name:</label>
        <br />
        <input
          type="text"
          name="firstName"
          id="firstName"
          value={firstName}
          onChange={handleChange}
        />
      </div>
      <br />
      <div className="form-group">
        <label htmlFor="lastName">Last Name:</label>
        <br />
        <input
          type="text"
          name="lastName"
          id="lastName"
          value={lastName}
          onChange={handleChange}
        />
      </div>
      <br />
      <div className="form-group">
        <label htmlFor="username">Username:</label>
        <br />
        <input
          type="text"
          name="username"
          id="username"
          value={username}
          onChange={handleChange}
        />
      </div>
      <br />
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <br />
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={handleChange}
        />
      </div>
      <br />
      <div className="form-group">
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <br />
        <input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
        />
      </div>
      <br />
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <br />
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={handleChange}
        />
      </div>
      <br />
      <div className="form-group">
        <label htmlFor="phone">Phone:</label>
        <br />
        <input
          type="text"
          name="phone"
          id="phone"
          value={phone}
          onChange={handleChange}
        />
      </div>
      <br />
      <div className="form-group">
        <label htmlFor="address">Address:</label>
        <br />
        <input
          type="text"
          name="address"
          id="address"
          value={address}
          onChange={handleChange}
        />
      </div>
      <br />
      <input type="submit" value="SignUp" />
    </form>
  );
}

export default HandleMultipleInputs;

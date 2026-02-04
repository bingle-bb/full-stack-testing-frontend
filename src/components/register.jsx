import { useState } from "react";
import testApi from "../testApi";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const handleRegister = async () => {
    try {
      const res = await testApi.post("/register", { username, password });
      setMsg("Registered successfully!");
      setUsername("");
      setPassword("");
    } catch (err) {
      console.error(err);
      setMsg("Registration failed");
    }
  };

  return (
    <div style={{ padding: "20px", border: "1px solid #ccc", margin: "10px" }}>
      <h2>Register</h2>
      <input
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleRegister}>Register</button>
      <p>{msg}</p>
    </div>
  );
}

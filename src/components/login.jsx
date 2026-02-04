import { useState } from "react";
import testApi from "../testApi";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const handleLogin = async () => {
    try {
      const res = await testApi.post("/login", { username, password });
      // optionally save token
      localStorage.setItem("user", JSON.stringify(res.data));
      setMsg("Login successful!");
      setUsername("");
      setPassword("");
    } catch (err) {
      console.error(err);
      setMsg("Login failed");
    }
  };

  return (
    <div style={{ padding: "20px", border: "1px solid #ccc", margin: "10px" }}>
      <h2>Login</h2>
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
      <button onClick={handleLogin}>Login</button>
      <p>{msg}</p>
    </div>
  );
}

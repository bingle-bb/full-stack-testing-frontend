import Register from "./components/register";
import Login from "./components/login";

function App() {
  return (
    <div>
      <h1>Test Frontend</h1>
      <div style={{ display: "flex", gap: "20px" }}>
        <Register />
        <Login />
      </div>
    </div>
  );
}

export default App;

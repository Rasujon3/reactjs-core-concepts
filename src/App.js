import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  return (
    <div className="App">
      <ExternalUsers></ExternalUsers>
    </div>
  );
}

function ExternalUsers() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/users`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, [users]);
  return (
    <div>
      <h2>External Users</h2>
      <p>{users.length}</p>
      {users.map((user) => (
        <User name={user.name} email={user.email}></User>
      ))}
    </div>
  );
}
function User(props) {
  return (
    <div style={{ border: "2px solid red", margin: "10px" }}>
      <h3>name : {props.name}</h3>
      <p>Email : {props.email}</p>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count - 1);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  );
}
export default App;

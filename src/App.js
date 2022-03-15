import logo from "./logo.svg";
import "./App.css";

const number = 5555;
const singer = { name: "Dr. Mahfuz", age: 50, job: "singer" };
const singer2 = { name: "Eva Rahman", age: 50, job: "singer2" };

const singerStyle = {
  color: "purple",
  backgroundColor: "white",
};

function App() {
  return (
    <div className="App">
      <Person name="Rubel" nayika="moushumi"></Person>
      <Person name="BappaRaz" nayika="cheka"></Person>
      <Person name="Kuber" nayika="Kopila"></Person>
      <h5>New component. yehhhh</h5>
      <p>Rock mama react mama.</p>
      <Friend movie="Shingham" phone="01777"></Friend>
      <Friend movie="Chak de" phone="01999"></Friend>
    </div>
  );
}

const Person = (props) => {
  // console.log(props);
  // console.log(props.name);
  return (
    <div className="person">
      <h1>{props.name}</h1>
      <p>Nayika: {props.nayika}</p>
    </div>
  );
};

function Friend(props) {
  console.log(props);
  return (
    <div className="container">
      <h3>Name: {props.movie}</h3>
      <p>phone: {props.phone}</p>
    </div>
  );
}

export default App;

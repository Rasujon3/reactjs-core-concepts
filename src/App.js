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
      <Person />
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <h5>New component. yehhhh</h5>
      <p>Rock mama react mama.</p>
      <Friend></Friend>
      <Friend></Friend>
      <Friend></Friend>
    </div>
  );
}

const Person = () => {
  return (
    <div className="person">
      <h1>Sakib Al Hasan</h1> <p>Profession: Cricketer</p>
    </div>
  );
};

function Friend() {
  return (
    <div className="container">
      <h3>Name: AJy Devgan</h3>
      <p>job: maramari</p>
    </div>
  );
}

export default App;

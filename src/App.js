import logo from "./logo.svg";
import "./App.css";

const number = 5555;
const singers = [
  { name: "Dr. Mahfuz", age: 50, job: "singer" },
  { name: "Eva Rahman", age: 50, job: "singer2" },
  { name: "Agun", age: 50, job: "sopno" },
  { name: "Shuvro", age: 50, job: "pathor" },
];

const singerStyle = {
  color: "purple",
  backgroundColor: "white",
};

function App() {
  const nayoks = [
    "Rubel",
    "BappaDa",
    "Kuber",
    "Jashim",
    "Salman shah",
    "Riyaz",
    "Razzak",
    "Anwar",
  ];
  return (
    <div className="App">
      {/* {nayoks.map((nayok) => (
        <>
          <li>{nayok}</li>
          <Person name={nayok} nayika="moushumi"></Person>
        </>
      ))} */}

      {singers.map((singer) => (
        <Person name={singer.name} nayika="moushumi"></Person>
      ))}

      {/* <Person name={nayoks[1]} nayika="cheka"></Person>
      <Person name={nayoks[2]} nayika="Kopila"></Person> */}
      {/* <h5>New component. yehhhh</h5>
      <p>Rock mama react mama.</p>
      <Friend movie="Shingham" phone="01777"></Friend>
      <Friend movie="Chak de" phone="01999"></Friend> */}
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

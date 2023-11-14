/* import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg"; */
import { useState } from "react";
import Card from "./Card";
import Header from "./Header";
import Footer from "./Footer";
import "./App.css";
import react from "./assets/react.svg";

function Greeting({ name }) {
  return name === "Inna" ? <p>Welcome {name}!</p> : <p>Please log in</p>;
}

function App() {
  //state which has an array with 3 people
  const [persons, setPersons] = useState([
    { id: 1, name: "Inna", title: "CEO", age: 40 },
    { id: 2, name: "Michael", title: "sub-CEO", age: 38 },
    { id: 3, name: "Finn", title: "kid", age: 1 },
  ]);

  //setTitle doesn't change state
  const [title, setTitle] = useState("Hello world");

  const [search, setSearch] = useState("");

  function clickHandler() {
    setTitle("Foxes for ever");
  }

  function removeHandler(id) {
    console.log(id);
    const updatedArray = persons.filter((person) => person.id !== id);
    setPersons(updatedArray);
  }

  function searchingHandler(e) {
    setSearch(e.target.value);
  }

  return (
    //fragment instead of covering <div>
    <>
      <Greeting name="smth" />
      <Header logo="Inna Kozhina" />
      <main className="main">
        <h1>{title}</h1>
        <input type="text" placeholder="Type" onChange={searchingHandler} />
        <h2>This is my application</h2>
        <img src={react}></img>
        <div className="my-image"></div>
        <div className="cards">
          {persons
            .filter((person) =>
              person.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((person) => (
              //function should be defined in Parent
              <Card
                key={person.id}
                {...person}
                //ananimous function
                click={() => removeHandler(person.id)}
              />
            ))}
        </div>

        <button onClick={clickHandler}>Click me</button>
      </main>

      <Footer copyright="Copyright ©" />
    </>
  );
}

export default App;

{
  /* <Card
            name={persons[0].name}
            title={persons[0].title}
            age={persons[0].age}
          />
          <Card
            name={persons[1].name}
            title={persons[1].title}
            age={persons[1].age}
          />
          <Card
            name={persons[2].name}
            title={persons[2].title}
            age={persons[2].age}
          /> */
}

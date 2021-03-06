import "./App.css";
import SomeClassComponent from "./components/SomeClassComponenet";
import Header from "./components/Header";
import Person from "./components/Person";
import PersonCard from "./components/PersonCard";
import UserForm from "./components/UserForm";
import MoreForm from "./components/MoreForm";

var peopleArr = [
  { firstName: "Jane", lastName: "Doe", age: 45, hairColor: "Black" },
  { firstName: "John", lastName: "Smith", age: 88, hairColor: "Brown" },
  { firstName: "Millard", lastName: "Fillmore", age: 50, hairColor: "Brown" },
  { firstName: "Maria", lastName: "Smith", age: 62, hairColor: "Brown" }
];
function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Hello Dojo!</h1>
        <h2>Things I need to do:</h2>
        <ul>
          <li>Learn React</li>
          <li>Climb Mt. Everest</li>
          <li>Run a marathon</li>
          <li>Feed the dogs</li>
        </ul>
        <SomeClassComponent someText={"This is our first class component."} />
        <Header firstName={"Jasmin"} lastName={"Carter"} />
        <div className="form-control">
          {peopleArr.map((person) => {
            return (
              <Person
                firstName={person.firstName}
                lastName={person.lastName}
                age={person.age}
                hairColor={person.hairColor}
              />
            );
          })}
        </div>
        <button onClick={() => alert("This button has been clicked!")}>
          Click Me
        </button>
        <div className="form-control my-5">
          {peopleArr.map((person) => {
            return (
              <PersonCard
                firstName={person.firstName}
                lastName={person.lastName}
                age={person.age}
                hairColor={person.hairColor}
              />
            );
          })}{" "}
        </div>
        <UserForm />
        <MoreForm />
      </div>
    </div>
  );
}

export default App;

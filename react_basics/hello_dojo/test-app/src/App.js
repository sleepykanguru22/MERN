import "./App.css";
import SomeClassComponent from "./components/SomeClassComponenet";
import Header from "./components/Header";
import Person from "./components/Person";
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
          <Person
            firstName={"Jane"}
            lastName={"Doe"}
            age={45}
            hairColor={"Black"}
          />
          <Person
            firstName={"John"}
            lastName={"Smith"}
            age={88}
            hairColor={"Brown"}
          />
          <Person
            firstName={"Millard"}
            lastName={"Fillmore"}
            age={62}
            hairColor={"Brown"}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
